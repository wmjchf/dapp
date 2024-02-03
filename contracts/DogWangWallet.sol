// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DogWangWallet {

    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function buy() payable public{

    }

    function withDraw() external  {
        uint balance = getBalance();
        require(balance > 0, "balance is not enough");
        require(msg.sender == owner, "caller is not owner");
        payable(msg.sender).transfer(balance);
    }

    function getBalance() private view returns(uint){
        return address(this).balance;
    }
}