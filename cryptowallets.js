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
			case "IOTA":
				return this.generateIOTAWallet();
			case "NMC":
				return this.generateNamecoinWallet();
			case "PPC":
				return this.generatePeercoinWallet();
			case "XMR":
				return this.generateMoneroWallet();
			case "XTZ":
				return this.generateTezosWallet();
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
			case "IOTA":
				return this.verifyIOTAPrivateKey(privateKey, address);
			case "NMC":
				return this.verifyNamecoinPrivateKey(privateKey, address);
			case "PPC":
				return this.verifyPeercoinPrivateKey(privateKey, address);
			case "XMR":
				return this.verifyMoneroPrivateKey(privateKey, address);
			case "XTZ":
				return this.verifyTezosPrivateKey(privateKey, address);
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
	
	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generateTezosWallet: function (){
		var tezos = require('tezos-wallet');
		console.log(tezos);
		throw "Not implemented";
	},
		
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*/
	verifyTezosPrivateKey(privateKey, address){
		try{
			var tezos = require('tezos-wallet');
			console.log(tezos);
			throw "Not implemented";
		}catch(err){return false;}
	},
	
	/**
	*	Returns an object with properties {currency, privateKey, address}
	*/
	generateIOTAWallet: async function (){
		const crypto = require("crypto");
		const seedStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9";
		var privateKey = "";
		const buf = Buffer.alloc(4);
		while(privateKey.length < 81){
			crypto.randomFillSync(buf);
			var n = buf.readUInt32BE(0) % 27;
			privateKey += seedStr[n];
		}
		
		// mute deprecation warning from iota library
		var error = console.error;
		console.error = function(){};
		
		const iota = this._initIOTA();
		var address = await new Promise(function(resolve, reject){
			iota.api.getNewAddress(privateKey, {
				index: 0,
				checksum: true,
				total: 1,
				security: 2
			}		
			, function(err, addr){resolve(addr[0])});
		});
		
		// unmute
		console.error = error;
		
		return {currency: "IOTA", privateKey: privateKey, address: address}
	},
	
	
	/**
	*	Returns true if the private key is the correct private key of the given address.
	*
	*	TODO: 	IOTA seeds are HD seeds and use 3 different security levels, so each private key can generate an infinite number of addresses.
	*			This currently only checks security level 2, and the first address generated by the seed. Support for more addresses should be added.
	*/
	verifyIOTAPrivateKey: async function(privateKey, address){
		try{
			const iota = this._initIOTA();
			var addr = await new Promise(function(resolve, reject){
				iota.api.getNewAddress(privateKey, {
					index: 0,
					checksum: true,
					total: 1,
					security: 2
				}		
				, function(err, addr){resolve(addr[0])});
			});
			return address == addr;
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
	
	
	/**
	*	Private function that initializes a singleton of the iota.lib.js IOTA class.
	*/
	_initIOTA: function(){
		// Initialize iota if not already initialized
		if(this._iota != undefined)
			return this._iota;
		else {
			
			// load and initialize library
			var IOTA = require('iota.lib.js');
			this._iota = new IOTA({
				"host": null,
				"port": null
			});
			return this._iota;
		}
	},
	_iota: undefined,
}
