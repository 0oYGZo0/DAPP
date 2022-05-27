// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Voting.sol";

contract TestVoting {
    Voting voting = Voting(DeployedAddresses.Voting());
    function test() public {
        Assert.equal(true, false, "Wrong");
    }
}