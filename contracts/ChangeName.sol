// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract ChangeName {
    string private name = "dogwang";

    function changeName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns(string memory){
        return name;
    }
}