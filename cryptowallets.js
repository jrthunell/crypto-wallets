module.exports = {

	generateWallet: function(currency){
		switch(currency.toUpperCase()){
			case "BTC":
				return this.generateBitcoinWallet();
			case "ETH":
				return this.generateEthereumWallet();
			case "LTC":
				return this.generateLitecoinWallet();
			case "DOGE":
				return this.generateDogecoinWallet();
			case "NMC":
				return this.generateNamecoinWallet();
			case "PPC":
				return this.generatePeercoinWallet();
			case "XMR":
				return this.generateMoneroWallet();
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
	},
	
	generateLitecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('LTC').versions);
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	generateDogecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('DOGE').versions);
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	generateNamecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('NMC').versions);
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	generatePeercoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('PPC').versions);
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
		
	
	generateMoneroWallet: async function (){
		var wallet;
		var log = console.log;
		var err = console.error;
		var warn = console.warn;
		// mute mymonero
		console.log = function(){};
		console.error = function(){};
		console.warn = function(){};
		var synced = false;
		
		await require("mymonero-core-js/monero_utils/MyMoneroCoreBridge")({}).then(function(coreBridge_instance) { 
			var res = coreBridge_instance.newly_created_wallet("english", 0);
			wallet = {privateKey: res.mnemonic_string, address: res.address_string};
			synced = true;
		})
		while(!synced);
		// unmute
		console.log = log;
		console.error = err;
		console.warn = warn;
		return wallet;
	},
}