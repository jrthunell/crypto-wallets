#!/usr/bin/env node

// grab command line arguments
const [,, ...args] = process.argv;

// import cryptowallets library
const cw = require('./cryptowallets');

// set console.log max array size to unlimited
require('util').inspect.defaultOptions.maxArrayLength = null;

function generateNAddresses(currency, n){
	var wallets = [];
	for(var i = 0; i < n; i++){
		wallets.push(cw.generateWallet(currency));
	}
	return wallets;
}

async function generateNMoneroAddresses(n){
	var wallets = [];
	for(var i = 0; i < n; i++){
		var wallet = await cw.generateWallet("XMR")
		wallets.push(wallet);
	}
	return wallets;
}

module.exports = {
	parseArgs(args){
		switch(args[0]){
			case "generate":
				if(args.length < 2){
					console.log("Usage: generate <currency> [number]");
					break;
				}
				if(args[1].toLowerCase() == "xmr"){
					generateNMoneroAddresses((args.length > 2)? args[2] : 1).then(function(wallets){
						console.log(wallets);
					});
					
					break;
				}
				console.log(generateNAddresses(args[1], (args.length > 2)? args[2] : 1));
				break;
			default:
				console.log("unknown command " + args[0]);
		}
	}
}
module.exports.parseArgs(args);