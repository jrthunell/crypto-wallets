var cw = require('./cryptowallets');
var assert = require('assert');
const NUM_TESTS = 10;

// BTC Tests
for(var i = 0; i < NUM_TESTS; i++){
	var wallet = cw.generateWallet("BTC");
	assert(cw.verifyBitcoinPrivateKey(wallet.privateKey, wallet.address), "BTC Test Failed");
}
console.log("BTC Tests Passed");

// ETH Tests
for(var i = 0; i < NUM_TESTS; i++){
	var wallet = cw.generateWallet("ETH");
	assert(cw.verifyEthereumPrivateKey(wallet.privateKey, wallet.address), "ETH Test Failed");
}
console.log("ETH Tests Passed");

// LTC Tests
for(var i = 0; i < NUM_TESTS; i++){
	var wallet = cw.generateWallet("LTC");
	assert(cw.verifyLitecoinPrivateKey(wallet.privateKey, wallet.address), "LTC Test Failed");
}
console.log("LTC Tests Passed");

// DOGE Tests
for(var i = 0; i < NUM_TESTS; i++){
	var wallet = cw.generateWallet("DOGE");
	assert(cw.verifyDogecoinPrivateKey(wallet.privateKey, wallet.address), "DOGE Test Failed");
}
console.log("DOGE Tests Passed");

// NMC Tests
for(var i = 0; i < NUM_TESTS; i++){
	var wallet = cw.generateWallet("NMC");
	assert(cw.verifyNamecoinPrivateKey(wallet.privateKey, wallet.address), "NMC Test Failed");
}
console.log("NMC Tests Passed");

// PPC Tests
for(var i = 0; i < NUM_TESTS; i++){
	var wallet = cw.generateWallet("PPC");
	assert(cw.verifyPeercoinPrivateKey(wallet.privateKey, wallet.address), "PPC Test Failed");
}
console.log("PPC Tests Passed");


// XMR Tests
async function testMonero(){
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = await cw.generateWallet("XMR");
		assert(cw.verifyMoneroPrivateKey(wallet.privateKey, wallet.address), "XMR Test Failed");
	}
	return true
}
testMonero().then(function(result){
	if(result)
		console.log("XMR Tests Passed\n");
});

setTimeout(function(){
	/**
	CLI Tests
	**/
	// set console.log to output to a string
	var log = console.log;
	var consoleOutput = "";
	console.log = function(obj){consoleOutput = obj};
	var cli = require('./cli.js');

	// Tests
	try{
	cli.parseArgs(["generate", "btc"]);
	assert.equal(consoleOutput.length, 1);
	assert.equal(consoleOutput[0].currency.toUpperCase(), "BTC");
	assert(cw.verifyPrivateKey(consoleOutput[0].currency, consoleOutput[0].privateKey, consoleOutput[0].address));
	
	cli.parseArgs(["generate", "ltc", 1]);
	assert.equal(consoleOutput.length, 1);
	assert.equal(consoleOutput[0].currency.toUpperCase(), "LTC");
	assert(cw.verifyPrivateKey(consoleOutput[0].currency, consoleOutput[0].privateKey, consoleOutput[0].address));
	
	cli.parseArgs(["generate", "doge", 2]);
	assert.equal(consoleOutput.length, 2);
	assert.equal(consoleOutput[1].currency.toUpperCase(), "DOGE");
	assert(cw.verifyPrivateKey(consoleOutput[0].currency, consoleOutput[1].privateKey, consoleOutput[1].address));
	
	cli.parseArgs(["generate", "ppc", 3]);
	assert.equal(consoleOutput.length, 3);
	assert.equal(consoleOutput[0].currency.toUpperCase(), "PPC");
	assert(cw.verifyPrivateKey(consoleOutput[1].currency, consoleOutput[2].privateKey, consoleOutput[2].address));
	
	cli.parseArgs(["generate", "ETH", 4]);
	assert.equal(consoleOutput.length, 4);
	assert.equal(consoleOutput[3].currency.toUpperCase(), "ETH");
	assert(cw.verifyPrivateKey(consoleOutput[2].currency, consoleOutput[1].privateKey, consoleOutput[1].address));
	
	cli.parseArgs(["generate", "NmC", 5]);
	assert.equal(consoleOutput.length, 5);
	assert.equal(consoleOutput[4].currency.toUpperCase(), "NMC");
	assert(cw.verifyPrivateKey(consoleOutput[2].currency, consoleOutput[3].privateKey, consoleOutput[3].address));
	
	cli.parseArgs(["generate", "xmR", 6]);
	setTimeout(function(){
		assert.equal(consoleOutput.length, 6);
		assert.equal(consoleOutput[3].currency.toUpperCase(), "XMR");
		assert(cw.verifyPrivateKey(consoleOutput[5].currency, consoleOutput[2].privateKey, consoleOutput[2].address));
		
		log("CLI Tests Passed\n\nAll Tests Passed");
	}, 1000);
	}catch(err){
		log(err);
		log(consoleOutput);
		console.log = log;
	}
}, 1000);