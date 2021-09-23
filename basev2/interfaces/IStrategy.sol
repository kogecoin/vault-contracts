pragma solidity ^0.6.12;

interface IStrategy {
    function harvestedToken() external view returns (address);

    function rewards() external view returns (address);

    function emergencyStatus() external view returns (bool);

    function want() external view returns (address);

    function jarDeposit(uint256) external;

    function withdraw(uint256) external;

    function withdrawAll() external returns (uint256);

    function balanceOf() external view returns (uint256);

    function balanceOfPool() external view returns (uint256);

    function getHarvestable() external view returns (uint256);

    function pairName() external view returns (string memory);

    function harvest() external;

    function setJar(address _jar) external;
}
