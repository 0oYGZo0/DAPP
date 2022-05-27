// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/openzeppelin-solidity/contracts/access/Ownable.sol";

contract Voting is Ownable {
    mapping(bytes32 => uint8) public votesReceived;
    bytes32[] public candidateList;

    function candidate(bytes32 _candidate) public onlyOwner {
        candidateList.push(_candidate);
    }

    function totalVotesFor(bytes32 _candidate) public view returns (uint8) {
        require(validCandidate(_candidate), "Not a valid candidate");
        return votesReceived[_candidate];
    }
    
    function voteForCandidate(bytes32 _candidate) public {
        require(validCandidate(_candidate), "Not a valid candidate");
        votesReceived[_candidate] += 1;
    }

    function validCandidate(bytes32 _candidate) public view returns (bool) {
        for(uint i = 0; i < candidateList.length; i++) {
            if (candidateList[i] == _candidate)
            return true;
        }
        return false;
    }
}
