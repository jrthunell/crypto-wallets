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