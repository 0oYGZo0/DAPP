//引入web3，创建实例
let Web3 = require("web3"); 
//var BigNumber = require("bignumber.js");
web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
//console.log(web3);

//创建对象
var abi = [
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
var address = '0xC4e79533e05af5b4e06Bbc699822e6051e7Ee60A';
var contract = new web3.eth.Contract(abi, address);

// var zhangsan = '0xe5bca0e4b889';
// var lisi = '0xe69d8ee59b9b';
// var wangwu = '0xe78e8be4ba94';
// contract.methods.candidate(wangwu)
//     .send({from: '0x45771a5c927EE0AD4bcFa45372477729b967461b'})
//     .on('receipt', function(result){
// 	     console.log(result);
// });

// contract.methods.candidateList(0).call((error, result)=>{
// 	console.log(result);
// });

// console.log(web3.utils.toHex('张三'));
// console.log(web3.utils.toHex('李四'));
// console.log(web3.utils.toHex('王五'));
// [0xe5bca0e4b889, 0xe69d8ee59b9b, 0xe78e8be4ba94]

