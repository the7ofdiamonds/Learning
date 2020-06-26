const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const myKey = ec.keyFromPrivate('97a39df3ba0a39cc88b01fb2adf954e8f041b092e453a4743044a60b3249caf7');

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const savjeeCoin = new Blockchain();

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'toAdress', 1000);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1); 

// Mine block
savjeeCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
// const tx2 = new Transaction(myWalletAddress, 'address1', 0);
// tx2.signTransaction(myKey);
// savjeeCoin.addTransaction(tx2);

// // Mine block
// savjeeCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${savjeeCoin.getBalanceOfAddress(myWalletAddress)}`);

// Uncomment this line if you want to test tampering with the chain
// savjeeCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log();
console.log('Blockchain valid?', savjeeCoin.isChainValid() ? 'Yes' : 'No');