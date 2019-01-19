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
console.log("Litecoin Public Address: \n" + ltcWallet.address);
console.log("Litecoin Private Key: \n" + ltcWallet.privateKey);
console.log("\n");

dogeWallet = cw.generateWallet("DOGE");
console.log("Dogecoin Public Address: \n" + dogeWallet.address);
console.log("Dogecoin Private Key: \n" + dogeWallet.privateKey);
console.log("\n");

nmcWallet = cw.generateWallet("DOGE");
console.log("Namecoin Public Address: \n" + nmcWallet.address);
console.log("Namecoin Private Key: \n" + nmcWallet.privateKey);
console.log("\n");