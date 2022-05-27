candidateList = {'张三': "candidate-1", '李四': "candidate-2", '王五': "candidate-3"};

window.onload = function() {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
    }

    startApp();
};

var votingContract;
function startApp() {
    var contractabi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_candidate",
                    "type": "bytes32"
                }
            ],
            "name": "candidate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "candidateList",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_candidate",
                    "type": "bytes32"
                }
            ],
            "name": "totalVotesFor",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_candidate",
                    "type": "bytes32"
                }
            ],
            "name": "validCandidate",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_candidate",
                    "type": "bytes32"
                }
            ],
            "name": "voteForCandidate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "votesReceived",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    var contractaddress = '0xC4e79533e05af5b4e06Bbc699822e6051e7Ee60A';
    votingContract = new web3.eth.Contract(contractabi, contractaddress);
    voteCount();
}

function voteCount() {
    var candidateNames = Object.keys(candidateList);
    for(var i = 0; i < candidateNames.length; i++) {
        let name = candidateNames[i];
        votingContract.methods.totalVotesFor(web3.utils.toHex(name))
        .call(function(error, result) {
            $("#" + candidateList[name]).html(result);
        });
    }
}

function voteForCandidate(name) {
    try {
        web3.eth.getAccounts(function(error, accounts) {
            votingContract.methods.voteForCandidate(web3.utils.toHex(name))
            .send({from: accounts[0],
                   gas:300000},
                   function(error) {
                       votingContract.methods.totalVotesFor(web3.utils.toHex(name))
                       .call(function(error, result) {
                           $("#" + candidateList[name]).html(result);
                       });
                   });
        });
    }
    catch(error) {}
}
