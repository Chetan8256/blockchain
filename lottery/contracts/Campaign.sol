pragma solidity ^0.4.16;

contract Campaign {

    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
    }

    Request[] public requests;

    address public manager;
    address[] public approvers;
    uint public minimumContribution;

    modifier restricted {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers.push(msg.sender);
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false
        });

        Request(description, value, recipient, false);

        requests.push(newRequest);
    }
}
