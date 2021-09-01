pragma solidity ^0.6.12;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/token/ERC20/SafeERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.4/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/IJar.sol";
import "./interfaces/IUniswap.sol";


abstract contract BaseStrategy is Ownable {
    using SafeERC20 for IERC20;
    using Address for address;
    using SafeMath for uint256;

    // Tokens
    address public want; //The LP token, Harvest calls this "rewardToken"
    address public harvestedToken; //The token we harvest, will add support for multiple tokens in v2

    // User accounts
    address public strategist; //The address the performance fee is sent to
    address public jar;

    constructor(
        address _want,
        address _strategist,
        address _harvestedToken
    ) public {
        require(_want != address(0));
        require(_strategist != address(0));

        want = _want;
        strategist = _strategist;
        harvestedToken = _harvestedToken;
    }

    // **** Views **** //

    function balanceOfWant() public view returns (uint256) {
        return IERC20(want).balanceOf(address(this));
    }

    function balanceOfPool() public virtual view returns (uint256);

    function getHarvestable() external virtual view returns (uint256);

    function balanceOf() public view returns (uint256) {
        return balanceOfWant().add(balanceOfPool());
    }

    function getName() external virtual pure returns (string memory);

    // **** Setters **** //

    function setJar(address _jar) external onlyOwner {
        require(jar == address(0), "jar already set");
        jar = _jar;
        emit SetJar(_jar);
    }

    function setStrategist(address _strategist) external onlyOwner {
        strategist = _strategist;
    }

    // **** State mutations **** //
    function deposit() public virtual;

    // Withdraw partial funds, normally used with a jar withdrawal
    function withdraw(uint256 _amount) external {
        require(msg.sender == jar, "!jar");
        uint256 _balance = IERC20(want).balanceOf(address(this));
        if (_balance < _amount) {
            _amount = _withdrawSome(_amount.sub(_balance));
            _amount = _amount.add(_balance);
        }

        IERC20(want).safeTransfer(jar, _amount);
    }

    function _withdrawAll() internal {
        _withdrawSome(balanceOfPool());
    }

    function _withdrawSome(uint256 _amount) internal virtual returns (uint256);

    function harvest() public virtual;

    // **** Internal functions ****
    function _swapUniswapWithPath(
        address[] memory path,
        uint256 _amount,
        address dexRouter
    ) internal {
        require(path[1] != address(0));

        // Swap with uniswap
        IERC20(path[0]).safeApprove(dexRouter, 0);
        IERC20(path[0]).safeApprove(dexRouter, _amount);

        IUniswapRouterV2(dexRouter).swapExactTokensForTokens(
            _amount,
            0,
            path,
            address(this),
            now.add(600)
        );
    }

    function _swapUniswapWithPathForFeeOnTransferTokens(
        address[] memory path,
        uint256 _amount,
        address dexRouter
    ) internal {
        require(path[1] != address(0));

        // Swap with uniswap
        IERC20(path[0]).safeApprove(dexRouter, 0);
        IERC20(path[0]).safeApprove(dexRouter, _amount);

        IUniswapRouterV2(dexRouter).swapExactTokensForTokensSupportingFeeOnTransferTokens(
            _amount,
            0,
            path,
            address(this),
            now.add(600)
        );
    }

    function _addLiquidityToDex(
        address token1,
        address token2,
        address dexRouter
    ) internal {
        uint256 _token1 = IERC20(token1).balanceOf(address(this));
        uint256 _token2 = IERC20(token2).balanceOf(address(this));
        if (_token1 > 0 && _token2 > 0) {
            IERC20(token1).safeApprove(dexRouter, 0);
            IERC20(token1).safeApprove(dexRouter, _token1);
            IERC20(token2).safeApprove(dexRouter, 0);
            IERC20(token2).safeApprove(dexRouter, _token2);

            IUniswapRouterV2(dexRouter).addLiquidity(
                token1,
                token2,
                _token1,
                _token2,
                0,
                0,
                address(this),
                now + 600
            );

            // Donates DUST
            IERC20(token1).safeTransfer(
                strategist,
                IERC20(token1).balanceOf(address(this))
            );
            IERC20(token2).safeTransfer(
                strategist,
                IERC20(token2).balanceOf(address(this))
            );
        }
    }

    // **** Events **** //
    event SetJar(address indexed jar);
}

// Masterchef interface - some function names may be different depending on the underlying farm
interface IMasterChef {
    function deposit(uint256 _pid, uint256 _amount) external;
    function withdraw(uint256 _pid, uint256 _amount) external;
    function emergencyWithdraw(uint256 _pid) external;
    function exit(uint256 _pid) external;

    function userInfo(uint256 _pid, address _user) external view returns(uint256, uint256);
    function balanceOf(uint256 _pid, address _user) external view returns (uint256);
    function earned(uint256 _pid, address _user) external view returns (uint256);
    function totalSupply(uint256 _pid) external view returns (uint256);
}

// Base contract for MasterChef/SakeMaster/etc rewards contract interfaces

abstract contract BaseStrategyMasterChef is BaseStrategy, ReentrancyGuard {

    address public rewards;
    uint256 public poolId;
    bool public emergencyStatus = false;

    constructor(
        address _rewards,
        address _want,
        address _strategist,
        uint256 _poolId,
        address _harvestedToken
    )
        public
        BaseStrategy(_want, _strategist, _harvestedToken)
    {
        poolId = _poolId;
        rewards = _rewards;
    }

    // **** Getters ****
    function balanceOfPool() public override view returns (uint256) {
        (uint256 amount, ) = IMasterChef(rewards).userInfo(poolId, address(this));
        return amount;
        //return IMasterChef(rewards).balanceOf(poolId, address(this));
    }

    function getHarvestable() external override view returns (uint256) {
        return IMasterChef(rewards).earned(poolId, address(this));
    }

    // **** Setters ****

    function deposit() public override nonReentrant {
        require(emergencyStatus == false, "emergency withdrawal in process");
        uint256 _want = IERC20(want).balanceOf(address(this));
        if (_want > 0) {
            IERC20(want).safeApprove(rewards, 0);
            IERC20(want).safeApprove(rewards, _want);
            IMasterChef(rewards).deposit(poolId, _want);
        }
    }

    function _withdrawSome(uint256 _amount)
        internal
        override
        returns (uint256)
    {
        IMasterChef(rewards).withdraw(poolId, _amount);
        return _amount;
    }

    /* **** Other Mutative functions **** */

    function _getReward() internal nonReentrant {
        IMasterChef(rewards).withdraw(poolId, 0);
        //Usually different for other pools based on IMasterChef
        //IMasterChef(rewards).claim(poolId);
    }

    // **** Admin functions ****

    function salvage(address token) public onlyOwner {
        require(token != want && token != harvestedToken, "cannot salvage");

        uint256 _token = IERC20(token).balanceOf(address(this));
        if (_token > 0) {
            IERC20(token).safeTransfer(msg.sender, _token);
        }
    }

    function emergencyWithdraw() public onlyOwner {
        IMasterChef(rewards).emergencyWithdraw(poolId);

        uint256 _want = IERC20(want).balanceOf(address(this));
        if (_want > 0) {
            IERC20(want).safeTransfer(jar, _want);
        }

        emergencyStatus = true;
    }
}


abstract contract StrategyFarmTwoAssets is BaseStrategyMasterChef {

    // Token addresses for the harvested and rewards tokens
    // Assuming only one reward token
    address public constant rewardTokenAddr = |VAULT_AUTOMATION_REWARD_TOKEN_PLACEHOLDER|;

    // Assuming one or more farm tokens
    |VAULT_AUTOMATION_FARM_TOKEN_PLACEHOLDER|

    // Assuming only one fee token
    address public constant feeTokenAddr = |VAULT_AUTOMATION_FEE_TOKEN_PLACEHOLDER|;

    address public multiHarvest = 0x0000000000000000000000000000000000000000;

    // Other constants
    uint16 public constant underlyingPoolId = |VAULT_AUTOMATION_POOL_ID_PLACEHOLDER_1|;
    uint256 public bpsFee = 100;
    uint256 public constant bpsHalf = 5000;
    uint256 public constant bpsMax = 10000;
    uint256 public harvestCutoff = 10**12;

    // Assuming there's always going to be one reward --> fee token path
    address[] public rewardToFeeTokenPath;

    // Assuming one or more reward --> farm token paths
    |VAULT_AUTOMATION_FARM_TOKEN_SWAP_PATH_PLACEHOLDER_0|

    constructor(
        address _rewards,
        address _want,
        address _strategist
    )
        public
        BaseStrategyMasterChef(
            _rewards,
            _want,
            _strategist,
            underlyingPoolId,
            rewardTokenAddr
        )
    {
        // Assuming there's always going to be one reward --> fee token path
        rewardToFeeTokenPath = new address[](2);
        rewardToFeeTokenPath[0] = rewardTokenAddr;
        rewardToFeeTokenPath[1] = feeTokenAddr;

        // Assuming one or more reward --> farm token paths
        |VAULT_AUTOMATION_FARM_TOKEN_SWAP_PATH_PLACEHOLDER_1|

    }

    // **** State Mutations ****

    function set_fee(uint256 NewFee) external onlyOwner() {
        require(NewFee <= 1000, "New fee must be less than 1000 bps");
        keepFXS = NewFee;
    }
    function set_multiHarvest(address newHarvest) external onlyOwner() {
        multiHarvest = newHarvest;
    }

    function set_harvestCutoff(uint256 newCutoff) external onlyOwner() {
        require(newCutoff <= 10**18, "New cutoff must be less than 1 Titan");
        harvestCutoff = newCutoff;
    }

    function calculateSwapAmount(address tokenToSwap, uint256 bps) internal view returns (uint256) {
        uint256 _tokenAmount = IERC20(tokenToSwap).balanceOf(address(this));
        return _tokenAmount.div(bpsMax).mul(bps);
    }

    function collect_fee(address rewardTokenAddr, address feeRouter) internal {
        // Get fee amount
        uint256 performanceFee = calculateSwapAmount(rewardTokenAddr, bpsFee);
        // If there is a performance fee, send to strategist
        if (performanceFee>0) {
            // If need to swap performance fee to another token, do the swap first
            if (rewardTokenAddr!=feeToken){
                _swapUniswapWithPath(rewardToken_feeToken_path, performanceFee, feeRouter);
                performanceFee = IERC20(feeToken).balanceOf(address(this));
            }
            // Send fee to strategist
            IERC20(feeToken).safeTransfer(
                strategist,
                performanceFee
            );
        }
    }

    //Harvest needs to be called twice because deposit and withdraw have the nonReentrant modifier, so I cannot claim and deposit in the same tx
    function harvest() public override nonReentrant {
        //prevent unauthorized smart contracts from calling harvest()
        require(msg.sender == tx.origin || msg.sender == owner() || msg.sender == strategist || msg.sender == multiHarvest || msg.sender == jar, "not authorized");

        // Collects reward tokens
        _getReward();

        //Swap reward for want
        uint256 _rewardBalance = IERC20(rewardTokenAddr).balanceOf(address(this));
        if (_rewardBalance > harvestCutoff){
            // Collect fee
            collect_fee(rewardToken, |VAULT_AUTOMATION_FARM_TOKEN_SWAP_PATH_ROUTER_PLACEHOLDER|);

            // Swap reward to want
            |VAULT_AUTOMATION_FARM_TOKEN_SWAP_PATH_PLACEHOLDER_2|

            // Stake the LP tokens
            deposit();
        }
    }
}

contract StrategyTwoAssets is StrategyFarmTwoAssets {
    // Token addresses
    address public FARM_MASTER_CHEF = |VAULT_AUTOMATION_MASTER_CHEF_PLACEHOLDER|;
    address public LP_TOKEN = |VAULT_AUTOMATION_POOL_ID_PLACEHOLDER_2|;

    constructor()
        public
        StrategyFarmTwoAssets(
            FARM_MASTER_CHEF,
            LP_TOKEN,
            msg.sender
        )
    {}

    // **** Views ****

    function getName() external override pure returns (string memory) {
        return "StrategyTwoAssets";
    }

    function pairName() external pure returns (string memory) {
        return "|VAULT_AUTOMATION_FARM_TOKEN_SWAP_PATH_PLACEHOLDER_3|";
    }
}
