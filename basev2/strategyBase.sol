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
            uint256 _dust1 = IERC20(token1).balanceOf(address(this));
            if (_dust1 > 0) {
                IERC20(token1).safeTransfer(
                    strategist,
                    _dust1
                );
            }
            uint256 _dust2 = IERC20(token2).balanceOf(address(this));
            if (_dust2 > 0) {
                IERC20(token2).safeTransfer(
                    strategist,
                    _dust2
                );
            }
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

    function deposit() public override {
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

    function _getReward() internal {
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

    // Reward token address
    address public constant rewardTokenAddr = 0x580A84C73811E1839F75d86d75d88cCa0c241fF4;
    // One or more farm tokens
    address public constant farmToken0Addr = 0xa3Fa99A148fA48D14Ed51d610c367C61876997F1;
    address public constant farmToken1Addr = 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174;
    // Fee token
    address public constant feeTokenAddr = 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270;
    // Routers
    address public constant feeTokenRouterAddr = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff; // Quickswap router
    address public constant farmTokenRouterAddr = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff; // Quickswap router
    address public constant swapRouter0Addr = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff; // Quickswap router
    address public constant swapRouter1Addr = 0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff; // Quickswap router
    
    address public multiHarvest = 0x0000000000000000000000000000000000000000;

    // Other constants
    uint16 public constant underlyingPoolId = 1;

    // The total fee in bps that KogeFarm will take from the reward token balance
    uint256 public kogefarmFeeAmountBps = 100;
    // The minimum amount (in bps) KogeFarm will harvest from the reward token
    uint256 public harvestCutoffBps = 10**12;
    // The reward --> fee token path
    address[] public rewardToFeeTokenPath;
    // Assuming one or more reward --> farm token paths
    address[] public rewardToFarmTokenPath0;
    address[] public rewardToFarmTokenPath1;

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
        rewardToFeeTokenPath = new address[](2);
        rewardToFeeTokenPath[0] = rewardTokenAddr;
        rewardToFeeTokenPath[1] = feeTokenAddr;

        rewardToFarmTokenPath0 = new address[](2);
        rewardToFarmTokenPath0[0] = rewardTokenAddr;
        rewardToFarmTokenPath0[1] = farmToken0Addr;

        rewardToFarmTokenPath1 = new address[](3);
        rewardToFarmTokenPath1[0] = rewardTokenAddr;
        rewardToFarmTokenPath1[1] = farmToken0Addr;
        rewardToFarmTokenPath1[2] = farmToken1Addr;
    }

    // **** State Mutations ****

    function set_fee(uint256 NewFee) external onlyOwner() {
        require(NewFee <= 1000, "New fee must be less than 1000 bps");
        kogefarmFeeAmountBps = NewFee;
    }
    function set_multiHarvest(address newHarvest) external onlyOwner() {
        multiHarvest = newHarvest;
    }

    function set_harvestCutoff(uint256 newCutoff) external onlyOwner() {
        require(newCutoff <= 10**18, "New cutoff must be less than 1 Titan");
        harvestCutoffBps = newCutoff;
    }

    function calculateSwapAmount(address _tokenToSwap, uint256 _bps) internal view returns (uint256) {
        uint256 _tokenAmount = IERC20(_tokenToSwap).balanceOf(address(this));
        return _tokenAmount.mul(_bps).div(10000);
    }

    function collectFee(uint256 _rewardBalance) internal {
        // Figure out how much fee is owed
        uint256 _feeAmount = _rewardBalance.mul(kogefarmFeeAmountBps).div(10000);
        // Swap reward token for fee token using the fee token router
        if(rewardTokenAddr != feeTokenAddr) {
            _swapUniswapWithPath(rewardToFeeTokenPath, _feeAmount, feeTokenRouterAddr);
            // Figure out how much we now have as a fee token
            _feeAmount = IERC20(feeTokenAddr).balanceOf(address(this));
        }
        // Send fee to strategist
        IERC20(feeTokenAddr).safeTransfer(strategist,_feeAmount);
    }

    //Harvest rewards and re-deposit into farm
    function harvest() public override nonReentrant {
        //prevent unauthorized smart contracts from calling harvest()
        require(msg.sender == tx.origin || msg.sender == owner() || msg.sender == strategist || msg.sender == multiHarvest || msg.sender == jar, "not authorized");

        // Collects reward tokens
        _getReward();
    
        uint256 swapAmount;
        // Figure out how much reward we collected
        uint256 _rewardBalance = IERC20(rewardTokenAddr).balanceOf(address(this));
        if (_rewardBalance > harvestCutoffBps){
            // Collect fee if not at 0
            if (kogefarmFeeAmountBps > 0) {
                collectFee(_rewardBalance);
            }
            // Swap reward for farm tokens (want)
            // Calculate the amount to swap for the farm token.
            swapAmount = calculateSwapAmount(rewardTokenAddr,5000);
            // Swap the required amount of reward token using the designated swap path
            _swapUniswapWithPath(rewardToFarmTokenPath0, swapAmount, swapRouter0Addr);
            // Calculate the amount to swap for the farm token.
            swapAmount = calculateSwapAmount(rewardTokenAddr,10000);
            // Swap the required amount of reward token using the designated swap path
            _swapUniswapWithPath(rewardToFarmTokenPath1, swapAmount, swapRouter1Addr);
            // Add liquidity
            _addLiquidityToDex(farmToken0Addr,farmToken1Addr,farmTokenRouterAddr);
            // Stake the LP tokens
            deposit();
        }
    }

}

contract StrategyTwoAssets is StrategyFarmTwoAssets {
    // Token addresses
    address public FARM_MASTER_CHEF = 0x574Fe4E8120C4Da1741b5Fd45584de7A5b521F0F;
    address public LP_TOKEN = 0x160532D2536175d65C03B97b0630A9802c274daD;
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
        return "FARMTOKEN1FARMTOKEN2";
    }
}
