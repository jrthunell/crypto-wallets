
# crypto-wallets
Javascript/Node library for generating cryptocurrency addresses and private keys.

### Supported Currencies:
- Bitcoin (BTC)
- Bitcoin Cash (BCH)
- Dogecoin (DOGE)
- Ethereum (ETH)
- Litecoin (LTC)
- Monero (XMR)
- Namecoin (NMC)
- Peercoin (PPC)

### Usage
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

### CLI - Command Line Interface
crypto-wallets can also be used in the command line.

Commands:
- `crypto-wallets generate <currency> [number]`
Generates and prints wallets in given currency. If [number] is not given, it defaults to 1.
```
>crypto-wallets generate btc
[ { currency: 'BTC',
    privateKey: 'L3Qa2u7nkHaNYZdsQYi2gVmBEtpppk4JrvQqaSYx51HWG51uwaTa',
    address: '1HMt2J3dQE428krHQEmFRFNDv2DyGAaMfb' } ]
```

```
>crypto-wallets generate doge 3
[ { currency: 'DOGE',
    privateKey: 'QWgiPqSPNXTtTt32hffy8C1uvHT4BJcbo78TSJcEmvf6AyhE85L3',
    address: 'DJnvD1NxRjgmXKGbCR98QEneFYcGGmnquc' },
  { currency: 'DOGE',
    privateKey: 'QPfrc7ahUuXqqd8oeETGh4ZzCrS1wNhognEx4N5my6MK3e6qQh1o',
    address: 'DN6uQWUNDfzjsXdaTtMhxwRK4hZ4RJJ357' },
  { currency: 'DOGE',
    privateKey: 'QTgfpCVt8CW1bgw9PdfmsSNY1FKodM65bLYYkQeaoqm1CkNgD3MK',
    address: 'DC7xVTob9XE6Soy6TjeWySinS3hG4cjR3F' } ]
```

- `crypto-wallets verify <currency> <privateKey> <address>`
Checks if the given private key controls the given address.
```
>crypto-wallets verify doge QWgiPqSPNXTtTt32hffy8C1uvHT4BJcbo78TSJcEmvf6AyhE85L3 DJnvD1NxRjgmXKGbCR98QEneFYcGGmnquc
Success: The private key matches the address
```

```
>crypto-wallets verify btc foo bar
Failure: The private key does not match the address
```

### Security
This library uses other third party libraries to generate the cryptocurrency addresses. So this library is secure if you trust the other libraries.

The libraries used are:
- Bitcoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Bitcoin Cash: [bitcore-lib-cash](https://www.npmjs.com/package/bitcore-lib-cash)
- Dogecoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Ethereum: [ethereumjs-wallet](https://www.npmjs.com/package/ethereumjs-wallet)
- Litecoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Namecoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Peercoin: [coinkey](https://www.npmjs.com/package/coinkey)
- Monero: [mymonero](https://github.com/mymonero/mymonero-core-js)
