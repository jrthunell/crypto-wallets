var cw = require('./cryptowallets');
var assert = require('assert');
var cli = require('./cli.js');
const NUM_TESTS = 25;

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
		console.log("XMR Tests Passed\n\nALL TESTS PASSED");
});