module.exports = {

	generateWallet: function(currency){
		switch(currency.toUpperCase()){
			case "BTC":
				return this.generateBitcoinWallet();
			case "ETH":
				return this.generateEthereumWallet();
			default: 
				console.log("Unsupported currency: " + currency);
		}
	},

	generateEthereumWallet: function (){
		var Wallet = require('ethereumjs-wallet');
		const wallet = Wallet.generate();
		return {privateKey: wallet.getPrivateKeyString(), address: wallet.getAddressString()}
	},

	generateBitcoinWallet: function (){
		var CoinKey = require('coinkey');
		var wallet = CoinKey.createRandom();
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	}
}