var Web3 = require('web3')

var web3 = new Web3('HTTP://127.0.0.1:7545') // 8545 if using ganache-cli


// web3.eth.getAccounts().then(accounts => console.log(accounts));

web3.eth.getAccounts().then(accounts => console.log(accounts[0]));

//CONFIGURATION
// -- Step 1: Set up the appropriate configuration
var EthereumTransaction = require("ethereumjs-tx").Transaction;
// -- Step 2: Set the sending and receiving addresses for the transaction.
var sendingAddress = '0x5B1e5178523D55f025DDEFF266BD24E7e3703818' 
var receivingAddress = '0xcBED4deB5bB7da4923CeF20e10Ff5f61F1C4EE1b'
var address3 = ''
var address4 = ''

// -- Step 3: Check the balances of each address web3.eth.getBalance(sendingAddress).then(console.log) web3.eth.getBalance(receivingAddress).then(console.log)
// web3.eth.getBalance(sendingAddress).then(console.log); 
// web3.eth.getBalance(receivingAddress).then(console.log);

//CREATE A TRANSACTION
// -- Step 4: Set up the transaction using the transaction variables 
// Had to update data to null or else was getting a buffer error saying that it could not convert strings, only "oxo" accounts
var rawTransaction = { 
    nonce: 8,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1000000000000000000,
    data: null }

// -- Step 5: View the raw transaction rawTransaction
// console.log(rawTransaction);

// -- Step 6: Check the new account balances
web3.eth.getBalance(sendingAddress).then(console.log); 
web3.eth.getBalance(receivingAddress).then(console.log);

//Sign the Transaction
// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
// looks like you can use Buffer.from below instead of just buffer because buffer is going to be deprecated
var privateKeySender = '641794b58492ba27dfa721ae07687d544461e4fb6fd69b026385ed5dbbd65b3e';
var privateKeySenderHex = new Buffer(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
// console.log(transaction);
transaction.sign(privateKeySenderHex)

//Send the transaction to the network
// -- Step 8: Send the serialized signed transaction to the Ethereum network.
var serializedTransaction = transaction.serialize();
console.log(serializedTransaction)
web3.eth.sendSignedTransaction(serializedTransaction);