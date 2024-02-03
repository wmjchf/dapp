// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract DogWangCoin is ERC20 {
    constructor() ERC20("DogWangCoin","DWC"){
        _mint(msg.sender,1000000 * 10 ** decimals());
    }
}