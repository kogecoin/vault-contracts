pragma solidity ^0.6.12;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC20/SafeERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/IStrategy.sol";



/* MasterChef contract */
contract MasterChef {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    // Info of each pool.
    struct PoolInfo {
        IERC20 lpToken;           // Address of LP token contract.
        uint256 allocPoint;       // How many allocation points assigned to this pool. EGGs to distribute per block.
        uint256 lastRewardBlock;  // Last block number that EGGs distribution occurs.
        uint256 accEggPerShare;   // Accumulated EGGs per share, times 1e12. See below.
        uint16 depositFeeBP;      // Make sure the underlying vault defines this is basis points in an immutable way
    }

    // Info of each pool.
    PoolInfo[] public poolInfo;

    // Withdrawal penalty
    uint256 public withdrawPenalty; // Make sure the underlying vault defines this is basis points in an immutable way

}




abstract contract JarBase is ERC20, Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using Address for address;
    using SafeMath for uint256;

    IERC20 public token;
    address public strategy;
    mapping (address => uint256) private lastTimeStaked;
    uint256 public constant keepMax = 10000;

    constructor(IStrategy _strategy, string memory name, string memory symbol)
        public
        ERC20(name, symbol)
    {
        require(address(_strategy) != address(0));
        _setupDecimals(ERC20(_strategy.want()).decimals());
        token = IERC20(_strategy.want());
        strategy = address(_strategy);
    }


    function transfer(address recipient, uint256 amount) public override returns (bool)
    {
        require(recipient != address(this));
        return super.transfer(recipient, amount);
    }

    function balance() public view returns (uint256) {
        return
            token.balanceOf(address(this)).add(
                IStrategy(strategy).balanceOf()
            );
    }

    function depositAll() external nonReentrant {
        deposit(token.balanceOf(msg.sender));
    }

    function deposit(uint256 _amount) public nonReentrant {
        require(msg.sender == tx.origin, "no contracts");
        lastTimeStaked[msg.sender] = now;

        IStrategy(strategy).harvest();

        uint256 _pool = balance();
        uint256 _before = token.balanceOf(address(this));
        token.safeTransferFrom(msg.sender, address(this), _amount);
        uint256 _after = token.balanceOf(address(this));
        _amount = _after.sub(_before); // Additional check for deflationary tokens
        uint256 shares = 0;
        if (totalSupply() == 0) {
            shares = _amount;
        } else {
            shares = (_amount.mul(totalSupply())).div(_pool);
        }

        // If deposit penalty, grab it. Otherwise, just comment out this section.
        //Grab deposit fee from underlying farm, if available.
        address masterChefAddr = IStrategy(strategy).rewards();
        uint16 underlyingPoolId = IStrategy(strategy).underlyingPoolId();
        MasterChef underlyingMC = MasterChef(masterChefAddr);
        // Read pool info on deposit fee
        (, , , , uint256 depositFee) = underlyingMC.poolInfo(underlyingPoolId);
        // Adjust for deposit fee
        if(depositFee > 0) {
            uint256 fee = shares.mul(depositFee).div(keepMax);
            shares = shares.sub(fee);
        }
        // Send share of pool
        _mint(msg.sender, shares);
        earnAmount(_amount);
    }

    // Transfer tokens to strategy contract for earning
    function earnAmount(uint256 _amount) internal {
        token.safeTransfer(strategy, _amount);
        IStrategy(strategy).deposit();
    }

    // Withdraw all balanaces
    function withdrawAll() external nonReentrant {
        withdraw(balanceOf(msg.sender));
    }

    // Withdraw some balances
    function withdraw(uint256 _shares) public nonReentrant {
        uint256 r = (balance().mul(_shares)).div(totalSupply());
        _burn(msg.sender, _shares);

        // Check balance
        uint256 b = token.balanceOf(address(this));
        if (b < r) {
            uint256 _withdraw = r.sub(b);
            IStrategy(strategy).withdraw(_withdraw);
            uint256 _after = token.balanceOf(address(this));
            uint256 _diff = _after.sub(b);
            if (_diff < _withdraw) {
                r = b.add(_diff);
            }
        }

        // If withdrawal penalty, subtract before transferring
        // Otherwise, just comment out this section
        // address masterChefAddr = IStrategy(strategy).rewards();
        // MasterChef underlyingMC = MasterChef(masterChefAddr);
        // Read pool info on withdrawal fee
        // uint256 withdrawPenalty = underlyingMC.withdrawPenalty();
        // bool emergencyStatus = IStrategy(strategy).emergencyStatus();
        // if (withdrawPenalty>0 && emergencyStatus==false) {
        //    uint256 WithdrawalFee = r.mul(withdrawPenalty).div(keepMax);
        //    r = r.sub(WithdrawalFee);
        // }

        token.safeTransfer(msg.sender, r);
    }

    // A view function that makes it easier for the UI to display LPs of users
    function getRatio() public view returns (uint256) {
        if (totalSupply() == 0) {
            return 1e18;
        }
        return balance().mul(1e18).div(totalSupply());
    }

    //Get last time staked
    function getLastTimeStaked(address _address) public view returns (uint256) {
        return lastTimeStaked[_address];
    }
}


contract vaultBase is JarBase {

    constructor(IStrategy _strategy)
        public
        JarBase(_strategy,
            string(abi.encodePacked(_strategy.pairName(), "vault")),
            string(abi.encodePacked("v", _strategy.pairName()))
        )
    {

    }
}
