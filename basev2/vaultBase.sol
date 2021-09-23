pragma solidity ^0.6.12;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC20/SafeERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/IStrategy.sol";


/**
// OpenZeppelin pausable: https://github.com/ConsenSysMesh/openzeppelin-solidity/blob/master/contracts/lifecycle/Pausable.sol
 * @title Pausable
 * @dev Base contract which allows children to implement an emergency stop mechanism.
 */
contract Pausable is Ownable {
  event Pause();
  event Unpause();

  bool public paused = false;


  /**
   * @dev Modifier to make a function callable only when the contract is not paused.
   */
  modifier whenNotPaused() {
    require(!paused);
    _;
  }

  /**
   * @dev Modifier to make a function callable only when the contract is paused.
   */
  modifier whenPaused() {
    require(paused);
    _;
  }

  /**
   * @dev called by the owner to pause, triggers stopped state
   */
  function pause() onlyOwner whenNotPaused public {
    paused = true;
    emit Pause();
  }

  /**
   * @dev called by the owner to unpause, returns to normal state
   */
  function unpause() onlyOwner whenPaused public {
    paused = false;
    emit Unpause();
  }
}


/* JarBase contract */ 

abstract contract JarBase is ERC20, Ownable, Pausable, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using Address for address;
    using SafeMath for uint256;

    IERC20 public immutable token;
    address public immutable strategy;
    
    struct UserInfo {
        uint256 lastTimeStaked;     // How many LP tokens the user has provided.
        uint256 lastAmountStaked; // Reward debt. See explanation below.
    }

    mapping (address => UserInfo) public userInfo;
    
    uint256 public constant keepMax = 10000;
    uint256 public constant maxDepositFeeMC = 1000;

    event Deposit(address indexed _from, uint256 _value);
    event Withdraw(address indexed _from, uint256 _value);

    constructor(IStrategy _strategy, string memory name, string memory symbol)
        public
        ERC20(name, symbol)
    {
        require(address(_strategy) != address(0));
        _setupDecimals(ERC20(_strategy.want()).decimals());
        token = IERC20(_strategy.want());
        strategy = address(_strategy);
    }

    modifier onlyEOA() {
        require(msg.sender == tx.origin && !address(msg.sender).isContract(), "no contracts"); 
        _;
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
    
    function depositAll() external {
        deposit(token.balanceOf(msg.sender));
    }

    function deposit(uint256 _amount) public nonReentrant whenNotPaused onlyEOA {

        IStrategy(strategy).harvest();
        
        // Calculate initial pool balance
        uint256 _pool = balance();
        
        // Transfer token to strategy and calculate amount to stake
        uint256 _before = token.balanceOf(strategy);
        token.safeTransferFrom(msg.sender, strategy, _amount);
        uint256 _after = token.balanceOf(strategy);
        uint256 _toDeposit = _after.sub(_before); // Additional check for deflationary tokens or deposit fees
        
        // Stake and calculate pool balance after
        IStrategy(strategy).jarDeposit(_toDeposit);
        uint256 _afterPool = balance();
        uint256 _newStaked = _afterPool.sub(_pool);
        
        // Require deposit fee to be within reasonable bounds
        uint256 maxDepositFee = _amount.mul(maxDepositFeeMC).div(keepMax);
        require(_newStaked.add(maxDepositFee) >= _amount, "!MC DEPOSIT FEE");
        
        // Compute share
        uint256 shares = 0;
        if (totalSupply() == 0) {
            shares = _newStaked;
        } else {
            shares = (_newStaked.mul(totalSupply())).div(_pool);
        }
    
        // Send share of pool
        _mint(msg.sender, shares);
        
        // Save last time/amount staked
        UserInfo storage user = userInfo[msg.sender];
        user.lastAmountStaked = balanceOf(msg.sender).mul(_afterPool).div(totalSupply());
        user.lastTimeStaked = now;

        // Emit event
        emit Deposit(msg.sender, _amount);
    }

    // Withdraw all balanaces
    function withdrawAll() external {
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
                r = _after;
            }
        }

        token.safeTransfer(msg.sender, r);

        // Emit event
        emit Withdraw(msg.sender, _shares);
    }

    // A view function that makes it easier for the UI to display LPs of users
    function getRatio() external view returns (uint256) {
        if (totalSupply() == 0) {
            return 1e18;
        }
        return balance().mul(1e18).div(totalSupply());
    }


}


contract vaultBase is JarBase {

    constructor(IStrategy _strategy)
        public
        JarBase(_strategy,
            string(abi.encodePacked(_strategy.pairName(), " ","vault")),
            string(abi.encodePacked("v", _strategy.pairName()))
        )
    {

    }
}
