// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "hardhat/console.sol";

contract Overflow {
    function add(uint8 num1, uint8 num2) public pure returns(uint8){
        return num1 + num2;
    }

    function sub(uint8 num1, uint8 num2) public pure returns(uint8){
        return num1 - num2;
    }
}