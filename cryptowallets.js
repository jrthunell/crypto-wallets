module.exports = {

	/*******************
	*
	*	PUBLIC FIELDS
	*
	********************/

	/**
	*	Takes a string of a currency code
	*
	*	Returns a JavaScript object {currency, privateKey, address}.
	*
	*	Note: For XMR (Monero), returns a Promise object
	* 	TODO: Make XMR synchronous
	*/
	generateWallet: function(currency){
		switch(currency.toUpperCase()){
			case "BTC":
				return this.generateBitcoinWallet();
			case "BCH":
				return this.generateBitcoinCashWallet();
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
	*	Returns true if the private key is the correct private key of the given address for the given currency.
	*/
	verifyPrivateKey(currency, privateKey, address){
		switch(currency.toUpperCase()){
			case "BTC":
				return this.verifyBitcoinPrivateKey(privateKey, address);
			case "BCH":
				return this.verifyBitcoinCashPrivateKey(privateKey, address);
			case "ETH":
				return this.verifyEthereumPrivateKey(privateKey, address);
			case "LTC":
				return this.verifyLitecoinPrivateKey(privateKey, address);
			case "DOGE":
				return this.verifyDogecoinPrivateKey(privateKey, address);
			case "NMC":
				return this.verifyNamecoinPrivateKey(privateKey, address);
			case "PPC":
				return this.verifyPeercoinPrivateKey(privateKey, address);
			case "XMR":
				return this.verifyMoneroPrivateKey(privateKey, address);
			default: 
				console.log("Unsupported currency: " + currency);
		}
	},

	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generateEthereumWallet: function (){
		var Wallet = require('ethereumjs-wallet');
		const wallet = Wallet.generate();
		return {currency: "ETH", privateKey: wallet.getPrivateKeyString(), address: wallet.getAddressString()}
	},
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyEthereumPrivateKey(privateKey, address){	
		try{
			var eth = require('ethereumjs-wallet');
			var wallet = eth.fromPrivateKey(new Buffer(privateKey.substring(2), "hex"));
			return wallet.getAddressString() == address;
		}catch(err){return false;}
	},
	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generateBitcoinWallet: function (){
		var CoinKey = require('coinkey');
		var wallet = CoinKey.createRandom();
		
		return {currency: "BTC", privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyBitcoinPrivateKey(privateKey, address){
		try{
			var CoinKey = require('coinkey');
			var wallet = CoinKey.fromWif(privateKey);
			return wallet.publicAddress == address;
		}catch(err){return false;}
	},
	
	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generateLitecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('LTC').versions);
		
		return {currency: "LTC", privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyLitecoinPrivateKey(privateKey, address){
		try{
			var CoinKey = require('coinkey');
			var wallet = CoinKey.fromWif(privateKey);
			return wallet.publicAddress == address;
		}catch(err){return false;}
	},
	
	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generateDogecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('DOGE').versions);
		
		return {currency: "DOGE", privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyDogecoinPrivateKey(privateKey, address){
		try{
			var CoinKey = require('coinkey');
			var wallet = CoinKey.fromWif(privateKey);
			return wallet.publicAddress == address;
		}catch(err){return false;}
	},
	
	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generateNamecoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('NMC').versions);
		
		return {currency: "NMC", privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
	
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyNamecoinPrivateKey(privateKey, address){
		try{
			var CoinKey = require('coinkey');
			var wallet = CoinKey.fromWif(privateKey);
			return wallet.publicAddress == address;
		}catch(err){return false;}
	},
	
	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generatePeercoinWallet: function (){
		var CoinKey = require('coinkey');
		var ci = require('coininfo')
		var wallet = CoinKey.createRandom(ci('PPC').versions);
		
		return {currency: "PPC", privateKey: wallet.privateWif, address: wallet.publicAddress}
	},
		
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyPeercoinPrivateKey(privateKey, address){
		try{
			var CoinKey = require('coinkey');
			var wallet = CoinKey.fromWif(privateKey);
			return wallet.publicAddress == address;
		}catch(err){return false;}
	},
	
	/**
	*	Returns a promise for an object with properties {currency, privateKey, address}
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
		wallet = {currency: "XMR", privateKey: res.mnemonic_string, address: res.address_string};
				
		// unmute mymonero
		console.log = log;
		console.error = err;
		console.warn = warn;
		return wallet;
	},
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyMoneroPrivateKey: async function(privateKey, address){
		try{
			var myMonero = await this._initMonero();
			var wallet = myMonero.seed_and_keys_from_mnemonic(privateKey, 0);
			return wallet.address_string == address;
		}catch(err){return false;}
	},
	
	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generateBitcoinCashWallet: function (){
		var bitcore = require('bitcore-lib-cash');
		var privateKey = new bitcore.PrivateKey();
		var address = privateKey.toAddress();
		return {currency: "BCH", privateKey: privateKey.toWIF(), address: address.toString()}
	},
		
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyBitcoinCashPrivateKey(privateKey, address){
		try{
			var bitcore = require('bitcore-lib-cash');
			var newAddr = new bitcore.PrivateKey(privateKey).toAddress().toString();
			return address == newAddr;
		}catch(err){return false;}
	},
	
	
	
	/*******************
	*
	*	PRIVATE FIELDS!
	*	DO NOT USE THESE!
	*
	********************/
	/**
	*	Private function that initializes a singleton of the MyMoneroCoreBridge class.
	*/
	_initMonero: async function(){
		// Initialize mymonero if not already initialized
		if(this.myMonero != undefined)
			return this.myMonero;
		else {
			this.myMonero = await require("mymonero-core-js/monero_utils/MyMoneroCoreBridge")({})
			return this.myMonero;
		}
	},
	_myMonero: undefined,
}
