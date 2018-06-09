pragma solidity ^0.4.16;

contract Votes {
    address public manager;
    address[] public voters;

    function Voets() public {
        manager = msg.sender;
    }
}
