module.exports = {

	/**
	*	Takes a string of a currency code
	*
	*	Returns a JavaScript object {privateKey, address}.
	*
	*	Note: For XMR (Monero), returns a Promise object
	* 	TODO: Make XMR synchronous
	*/
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

	/**
	*	Returns an object with properties {privateKey, address}
	*/
	generateEthereumWallet: function (){
		var Wallet = require('ethereumjs-wallet');
		const wallet = Wallet.generate();
		return {privateKey: wallet.getPrivateKeyString(), address: wallet.getAddressString()}
	},

	/**
	*	Returns an object with properties {privateKey, address}
	*/
	generateBitcoinWallet: function (){
		var CoinKey = require('coinkey');
		var wallet = CoinKey.createRandom();
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	/**
	*	Returns an object with properties {privateKey, address}
	*/
	generateLitecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('LTC').versions);
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	/**
	*	Returns an object with properties {privateKey, address}
	*/
	generateDogecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('DOGE').versions);
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	/**
	*	Returns an object with properties {privateKey, address}
	*/
	generateNamecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('NMC').versions);
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	/**
	*	Returns an object with properties {privateKey, address}
	*/
	generatePeercoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('PPC').versions);
		
		return {privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
		
	
	/**
	*	Private function that initializes a singleton of the MyMoneroCoreBridge class.
	*/
	_initMonero: async function(){
		if(this.myMonero != undefined)
			return this.myMonero;
		else {
			this.myMonero = await require("mymonero-core-js/monero_utils/MyMoneroCoreBridge")({})
			return this.myMonero;
		}
	},
	_myMonero: undefined,
	/**
	*	Returns a promise for an object with properties {privateKey, address}
	*/
	generateMoneroWallet: async function (){
		var wallet;
		
		// mute mymonero
		var log = console.log;
		var err = console.error;
		var warn = console.warn;
		console.log = function(){};
		console.error = function(){};
		console.warn = function(){};
		
		var myMonero = await this._initMonero();
		var res = myMonero.newly_created_wallet("english", 0);
		wallet = {privateKey: res.mnemonic_string, address: res.address_string};
				
		// unmute mymonero
		console.log = log;
		console.error = err;
		console.warn = warn;
		return wallet;
	},
}