var cw = require('./cryptowallets');

btcWallet = cw.generateWallet("BTC");
console.log("Bitcoin Public Address: " + btcWallet.address);
console.log("Bitcoin Private Key: " + btcWallet.privateKey);
console.log("\n");

ethWallet = cw.generateWallet("ETH");
console.log("Ethereum Public Address: " + ethWallet.address);
console.log("Ethereum Private Key: " + ethWallet.privateKey);
console.log("\n");