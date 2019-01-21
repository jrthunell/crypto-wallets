# crypto-wallets
Javascript/Node library for generating cryptocurrency addresses and private keys.

#### Supported Currencies:
- Bitcoin (BTC)
- Dogecoin (DOGE)
- Ethereum (ETH)
- Litecoin (LTC)
- Namecoin (NMC)
- Peercoin (PPC)
- Monero (XMR)

#### Usage
Install crypto-wallets with `npm install --save crypto-wallets`

##### Example: Generating Bitcoin Wallet
```
var cw = require('crypto-wallets');
var bitcoinWallet = cw.generateWallet('BTC');
console.log("Address: " + bitcoinWallet.address);
console.log("Private Key: " + bitcoinWallet.privateKey);
```

##### Example: Generating Ethereum Wallet
```
var cw = require('crypto-wallets');
var ethWallet = cw.generateWallet('ETH');
console.log("Address: " + ethWallet.address);
console.log("Private Key: " + ethWallet.privateKey);
```

##### Example: Generating Monero Wallet
Note: the generateWallet("XMR") and generateMoneroWallet functions are both asynchronous and return a promise, unlike the other currencies.
```
var cw = require('crypto-wallets');
cw.generateWallet('XMR').then(function(moneroWallet){
	console.log("Address: " + moneroWallet.address);
	console.log("Private Key: " + moneroWallet.privateKey);
});
```


### Security
This library uses other third party libraries to generate the cryptocurrency addresses. So this library is secure if you trust the other libraries.

The libraries used are:
- Bitcoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Dogecoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Ethereum: [ethereumjs-wallet](https://www.npmjs.com/package/ethereumjs-wallet)
- Litecoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Namecoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Peercoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Monero: [mymonero](https://github.com/mymonero/mymonero-core-js)