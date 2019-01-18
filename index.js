var cw = require('./cryptowallets');

console.log("Welcome to crypto-wallets. This library generates random, secure wallets for a variety of cryptocurrencies. This file tests cryptowallets.js by generating a random keypair of each supported currency.\n\n");

btcWallet = cw.generateWallet("BTC");
console.log("Bitcoin Public Address: \n" + btcWallet.address);
console.log("Bitcoin Private Key: \n" + btcWallet.privateKey);
console.log("\n");

ethWallet = cw.generateWallet("ETH");
console.log("Ethereum Public Address: \n" + ethWallet.address);
console.log("Ethereum Private Key: \n" + ethWallet.privateKey);
console.log("\n");

ltcWallet = cw.generateWallet("LTC");
console.log("Litcoin Public Address: \n" + ltcWallet.address);
console.log("Litcoin Private Key: \n" + ltcWallet.privateKey);
console.log("\n");