var cw = require('./cryptowallets');
var assert = require('assert');
const NUM_TESTS = 10;

async function runTests(){
	// BTC Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = cw.generateWallet("BTC");
		assert(cw.verifyBitcoinPrivateKey(wallet.privateKey, wallet.address), "BTC Test Failed");
	}
	assert(cw.verifyBitcoinPrivateKey("L2XCaHvBuXaR298tx2RXTJym7SzCaotzZf2D4TxrJnqEewHSwL3V", "12jJbyfELU3tqvqN5E5MWpSMLZKfu9aMCY"), "BTC Verify Test 1 Failed"); // correct
	assert(!cw.verifyBitcoinPrivateKey("L2XCaHvBuXaR298tx2RXTJym7SzCaotzZf2D4TxrJnqEewHSwL3V", "13jJbyfELU3tqvqN5E5MWpSMLZKfu9aMCY"), "BTC Verify Test 2 Failed"); // wrong address
	assert(!cw.verifyBitcoinPrivateKey("L3XCaHvBuXaR298tx2RXTJym7SzCaotzZf2D4TxrJnqEewHSwL3V", "12jJbyfELU3tqvqN5E5MWpSMLZKfu9aMCY"), "BTC Verify Test 3 Failed"); // wrong private key
	assert(!cw.verifyBitcoinPrivateKey("foobarbaz", "blahblahblah"), "BTC Verify Test 4 Failed"); // random garbage
	console.log("BTC Tests Passed");

	// BCH Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = cw.generateWallet("BCH");
		assert(cw.verifyBitcoinCashPrivateKey(wallet.privateKey, wallet.address), "BCH Test Failed");
	}
	assert(cw.verifyBitcoinCashPrivateKey("L5h1jhT4RHEmRV77TRhroziYco7huZKwF2usvGiPaW7F4AyE3xxM", "bitcoincash:qp2847k2p3n0wfqss459csk4kwmw2gwr05t3mtp9aw"), "BCH Verify Test 1 Failed"); // correct
	assert(!cw.verifyBitcoinCashPrivateKey("L5h1jhT4RHEmRV77TRhroziYco7huZKwF2usvGiPaW7F4AyE3xxM", "bitcoincash:qp3847k2p3n0wfqss459csk4kwmw2gwr05t3mtp9aw"), "BCH Verify Test 2 Failed"); // wrong address
	assert(!cw.verifyBitcoinCashPrivateKey("L4h1jhT4RHEmRV77TRhroziYco7huZKwF2usvGiPaW7F4AyE3xxM", "bitcoincash:qp2847k2p3n0wfqss459csk4kwmw2gwr05t3mtp9aw"), "BCH Verify Test 3 Failed"); // wrong private key
	assert(!cw.verifyBitcoinCashPrivateKey("foobarbaz", "blahblahblah"), "BCH Verify Test 4 Failed"); // random garbage
	console.log("BCH Tests Passed");

	// ETH Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = cw.generateWallet("ETH");
		assert(cw.verifyEthereumPrivateKey(wallet.privateKey, wallet.address), "ETH Test Failed");
	}
	assert(cw.verifyEthereumPrivateKey("0x2468e44a0b34cbae6e874f4138c4885b59e531f281b8440b12495a5194b4c3eb", "0x5d16d42a38452f36758e756ec2fbdd1ccb55df87"), "ETH Verify Test 1 Failed"); // correct
	assert(!cw.verifyEthereumPrivateKey("0x2468e44a0b34cbae6e874f4138c4885b59e531f281b8440b12495a5194b4c3eb", "0x4d16d42a38452f36758e756ec2fbdd1ccb55df87"), "ETH Verify Test 2 Failed"); // wrong address
	assert(!cw.verifyEthereumPrivateKey("0x1468e44a0b34cbae6e874f4138c4885b59e531f281b8440b12495a5194b4c3eb", "0x5d16d42a38452f36758e756ec2fbdd1ccb55df87"), "ETH Verify Test 3 Failed"); // wrong private key
	assert(!cw.verifyEthereumPrivateKey("foobarbaz", "blahblahblah"), "ETH Verify Test 4 Failed"); // random garbage
	console.log("ETH Tests Passed");

	// LTC Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = cw.generateWallet("LTC");
		assert(cw.verifyLitecoinPrivateKey(wallet.privateKey, wallet.address), "LTC Test Failed");
	}
	assert(cw.verifyLitecoinPrivateKey("TB391rij1Ep3fE4znXBXRWSfgvsupWfSQYR3Yadx2NVyRg33vuXH", "La4KkHBaXJMogcGYkVCmHxhZU8hvzYnDGa"), "LTC Verify Test 1 Failed"); // correct
	assert(!cw.verifyLitecoinPrivateKey("TB391rij1Ep3fE4znXBXRWSfgvsupWfSQYR3Yadx2NVyRg33vuXH", "LA4KkHBaXJMogcGYkVCmHxhZU8hvzYnDGa"), "LTC Verify Test 2 Failed"); // wrong address
	assert(!cw.verifyLitecoinPrivateKey("Tb391rij1Ep3fE4znXBXRWSfgvsupWfSQYR3Yadx2NVyRg33vuXH", "La4KkHBaXJMogcGYkVCmHxhZU8hvzYnDGa"), "LTC Verify Test 3 Failed"); // wrong private key
	assert(!cw.verifyLitecoinPrivateKey("foobarbaz", "blahblahblah"), "LTC Verify Test 4 Failed"); // random garbage
	console.log("LTC Tests Passed");

	// DOGE Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = cw.generateWallet("DOGE");
		assert(cw.verifyDogecoinPrivateKey(wallet.privateKey, wallet.address), "DOGE Test Failed");
	}
	assert(cw.verifyDogecoinPrivateKey("QR3L2AobP65VMhKxQhFjNQoEkHNrtXjnYVpTJmU1qHyjr7X2tzM8", "DDXKUuYWUREHod3B89ZcSRzGmmALYaoRFL"), "DOGE Verify Test 1 Failed"); // correct
	assert(!cw.verifyDogecoinPrivateKey("QR3L2AobP65VMhKxQhFjNQoEkHNrtXjnYVpTJmU1qHyjr7X2tzM8", "DdXKUuYWUREHod3B89ZcSRzGmmALYaoRFL"), "DOGE Verify Test 2 Failed"); // wrong address
	assert(!cw.verifyDogecoinPrivateKey("Qr3L2AobP65VMhKxQhFjNQoEkHNrtXjnYVpTJmU1qHyjr7X2tzM8", "DDXKUuYWUREHod3B89ZcSRzGmmALYaoRFL"), "DOGE Verify Test 3 Failed"); // wrong private key
	assert(!cw.verifyDogecoinPrivateKey("foobarbaz", "blahblahblah"), "DOGE Verify Test 4 Failed"); // random garbage
	console.log("DOGE Tests Passed");
	
	// IOTA Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = await cw.generateWallet("IOTA");
		assert(cw.verifyIOTAPrivateKey(wallet.privateKey, wallet.address), "IOTA Test Failed");
	}
	assert(await cw.verifyIOTAPrivateKey("OVXGOLZEVAPVZHJETN9WWRIPYHMQBLONCXUMGJECBRJQFZNSBRNRYZK9UXSCBJNELJVYOZG9VACLDHORM",
			"VPAFE9UQ9VRIVWRQRNGNLAGJRRDZVUYKQJAKWOPJTSOWSZGNSCWLDVJ9T9PRIHZPGLAEHIVTGYZEZLUGWIJMCRDSKC"), "IOTA Verify Test 1 Failed"); // correct
	assert(!await cw.verifyIOTAPrivateKey("OVXGOLZEVAPVZHJETN9WWRIPYHMQBLONCXUMGJECBRJQFZNSBRNRYZK9UXSCBJNELJVYOZG9VACLDHORM",
			"APAFE9UQ9VRIVWRQRNGNLAGJRRDZVUYKQJAKWOPJTSOWSZGNSCWLDVJ9T9PRIHZPGLAEHIVTGYZEZLUGWIJMCRDSKC"), "IOTA Verify Test 2 Failed"); // wrong address
	assert(!await cw.verifyIOTAPrivateKey("AVXGOLZEVAPVZHJETN9WWRIPYHMQBLONCXUMGJECBRJQFZNSBRNRYZK9UXSCBJNELJVYOZG9VACLDHORM",
			"VPAFE9UQ9VRIVWRQRNGNLAGJRRDZVUYKQJAKWOPJTSOWSZGNSCWLDVJ9T9PRIHZPGLAEHIVTGYZEZLUGWIJMCRDSKC"), "IOTA Verify Test 3 Failed"); // wrong private key
	assert(!await cw.verifyIOTAPrivateKey("foobarbaz", "blahblahblah"), "IOTA Verify Test 4 Failed"); // random garbage
			console.log("IOTA Tests Passed");


	// NMC Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = cw.generateWallet("NMC");
		assert(cw.verifyNamecoinPrivateKey(wallet.privateKey, wallet.address), "NMC Test Failed");
	}
	assert(cw.verifyNamecoinPrivateKey("TmscYEwr4TQJaeY1Gxkvmujyb5J4wsBWX61FfciUurziqZhpxcpR", "NE2Qp46NqJHCAYLQzqZ7GwMjjNBaD62BCo"), "NMC Verify Test 1 Failed"); // correct
	assert(!cw.verifyNamecoinPrivateKey("TmscYEwr4TQJaeY1Gxkvmujyb5J4wsBWX61FfciUurziqZhpxcpR", "Ne2Qp46NqJHCAYLQzqZ7GwMjjNBaD62BCo"), "NMC Verify Test 2 Failed"); // wrong address
	assert(!cw.verifyNamecoinPrivateKey("TMscYEwr4TQJaeY1Gxkvmujyb5J4wsBWX61FfciUurziqZhpxcpR", "NE2Qp46NqJHCAYLQzqZ7GwMjjNBaD62BCo"), "NMC Verify Test 3 Failed"); // wrong private key
	assert(!cw.verifyNamecoinPrivateKey("foobarbaz", "blahblahblah"), "NMC Verify Test 4 Failed"); // random garbage
	console.log("NMC Tests Passed");

	// PPC Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = cw.generateWallet("PPC");
		assert(cw.verifyPeercoinPrivateKey(wallet.privateKey, wallet.address), "PPC Test Failed");
	}
	assert(cw.verifyPeercoinPrivateKey("W5Le4HJ8tEwxR5wbws77Z9AC2nS5YPX4ENUDy6AYXPPufwccu94v", "UdANp6MvASce2LJ2f6qdbBv6ur7bj9C1mj"), "PPC Verify Test 1 Failed"); // correct
	assert(!cw.verifyPeercoinPrivateKey("W5Le4HJ8tEwxR5wbws77Z9AC2nS5YPX4ENUDy6AYXPPufwccu94v", "UDANp6MvASce2LJ2f6qdbBv6ur7bj9C1mj"), "PPC Verify Test 2 Failed"); // wrong address
	assert(!cw.verifyPeercoinPrivateKey("W4Le4HJ8tEwxR5wbws77Z9AC2nS5YPX4ENUDy6AYXPPufwccu94v", "UdANp6MvASce2LJ2f6qdbBv6ur7bj9C1mj"), "PPC Verify Test 3 Failed"); // wrong private key
	assert(!cw.verifyPeercoinPrivateKey("foobarbaz", "blahblahblah"), "PPC Verify Test 4 Failed"); // random garbage
	console.log("PPC Tests Passed");


	// XMR Tests
	for(var i = 0; i < NUM_TESTS; i++){
		var wallet = await cw.generateWallet("XMR");
		assert(cw.verifyMoneroPrivateKey(wallet.privateKey, wallet.address), "XMR Test Failed");
	}
	assert(await cw.verifyMoneroPrivateKey("mowing skydive karate gleeful ethics jaws amaze boat nabbing foggy owner asleep mayor whole jukebox bunch aside zero injury rotate yawning juicy annoyed batch gleeful",
			"4AAjUAGZugkLhCFqV1Hfwr7hLicQjkcHZd4gdz3Eo6oqHqKZw3FBhvW5U6e5ndD9GLG4P8u2tgF5th9QFpy8kU3q3M3z54E"), "XMR Verify Test 1 Failed"); // correct
	assert(!await cw.verifyMoneroPrivateKey("mowing skydive karate gleeful ethics jaws amaze boat nabbing foggy owner asleep mayor whole jukebox bunch aside zero injury rotate yawning juicy annoyed batch gleeful",
			"4BAjUAGZugkLhCFqV1Hfwr7hLicQjkcHZd4gdz3Eo6oqHqKZw3FBhvW5U6e5ndD9GLG4P8u2tgF5th9QFpy8kU3q3M3z54E"), "XMR Verify Test 2 Failed"); // wrong address
	assert(!await cw.verifyMoneroPrivateKey("mayor skydive karate gleeful ethics jaws amaze boat nabbing foggy owner asleep mayor whole jukebox bunch aside zero injury rotate yawning juicy annoyed batch gleeful",
			"4AAjUAGZugkLhCFqV1Hfwr7hLicQjkcHZd4gdz3Eo6oqHqKZw3FBhvW5U6e5ndD9GLG4P8u2tgF5th9QFpy8kU3q3M3z54E"), "XMR Verify Test 3 Failed"); // wrong private key
	assert(!await cw.verifyMoneroPrivateKey("foobarbaz", "blahblahblah"), "XMR Verify Test 4 Failed"); // random garbage
			console.log("XMR Tests Passed\n");
			
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
	
	cli.parseArgs(["generate", "bCh", 8]);
	assert.equal(consoleOutput.length, 8);
	assert.equal(consoleOutput[2].currency.toUpperCase(), "BCH");
	assert(cw.verifyPrivateKey(consoleOutput[7].currency, consoleOutput[6].privateKey, consoleOutput[6].address));
	
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
	
	await cli.parseArgs(["generate", "xmR", 6]);
	assert.equal(consoleOutput.length, 6);
	assert.equal(consoleOutput[3].currency.toUpperCase(), "XMR");
	assert(cw.verifyPrivateKey(consoleOutput[5].currency, consoleOutput[2].privateKey, consoleOutput[2].address));
	
	await cli.parseArgs(["generate", "iOtA", 7]);
	assert.equal(consoleOutput.length, 7);
	assert.equal(consoleOutput[3].currency.toUpperCase(), "IOTA");
	assert(cw.verifyPrivateKey(consoleOutput[5].currency, consoleOutput[2].privateKey, consoleOutput[2].address));
	
	// more CLI tests
	// test help
	cli.parseArgs(['help']);
	assert.equal(consoleOutput, cli.helpMsg);
	
	// test verify
	cli.parseArgs(['verify', 'btc', 'L5SVDPKPN4GwS5K5HC2WUNa1qaxuxVsaatWuikQV9N7MYfqbhKxH', '1BWkXWErEmbRWHzPxYwCXGjugteqZo5K3U']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address");
	cli.parseArgs(['verify', 'btc', 'L5SVDPKPN4GwS5K5HC2WUNa1qaxuxVsaatWuikQV9N7MYfqbhKxH', '1BWkXWErEmbRWHzPxYwCXujugteqZo5K3U']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'btc', 'L5SqDPKPN4GwS5K5HC2WUNa1qaxuxVsaatWuikQV9N7MYfqbhKxH', '1BWkXWErEmbRWHzPxYwCXujugteqZo5K3U']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'btc', 'foobarbaz', 'blahblahblah']) // random garbage
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	
	cli.parseArgs(['verify', 'bch', 'L4W7YJRzKeQ5bBoH2fCjTfSF7kbkWmwkmmFPapPgeLqvTvB5Jb5m', 'bitcoincash:qp64vgz7e72rpqgz53596adn4vyuzp08kvdt35nug6']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address");
	cli.parseArgs(['verify', 'bch', 'L4W7YJRzKeQ5bBoH2fCjTfSF7kbkWmwkmmFPapPgeLqvTvB5Jb5m', 'bitcoincash:qp64vge7e72rpqgz53596adn4vyuzp08kvdt35nug6']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'bch', 'L4W7YJRzKeQ5bBoH2fCjTfSF7kbkWmwkmmFPapPgeLqvTvB5Jb5v', 'bitcoincash:qp64vgz7e72rpqgz53596adn4vyuzp08kvdt35nug6']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'bch', 'foobarbaz', 'blahblahblah']) // random garbage
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	
	cli.parseArgs(['verify', 'eth', '0x849c6b885314168268f31db14043982569821d04a5602275c08bef304949b74e', '0x4f14d3554ce2c63630ee10fda8ee5ac1eb849987']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address");
	cli.parseArgs(['verify', 'eth', '0x849c6b885314168268f31db14043982569821d04a5602275c08bef304949b74e', '0x3f14d3554ce2c63630ee10fda8ee5ac1eb849987']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'eth', '0x749c6b885314168268f31db14043982569821d04a5602275c08bef304949b74e', '0x4f14d3554ce2c63630ee10fda8ee5ac1eb849987']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'eth', 'foobarbaz', 'blahblahblah']) // random garbage
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	
	cli.parseArgs(['verify', 'doge', 'QTeTfGEXznDgN2mGPyFJcDbrUxFUYGFoe7N6XVqj2CwFB4y7dsjg', 'DPvVrgJZJgGHaWz5aFUERyyt7noNQiq5Mh']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address");
	cli.parseArgs(['verify', 'doge', 'QTeTfGEXznDgN2mGPyFJcDbrUxFUYGFoe7N6XVqj2CwFB4y7dsjg', 'DPVVrgJZJgGHaWz5aFUERyyt7noNQiq5Mh']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'doge', 'QteTfGEXznDgN2mGPyFJcDbrUxFUYGFoe7N6XVqj2CwFB4y7dsjg', 'DPvVrgJZJgGHaWz5aFUERyyt7noNQiq5Mh']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'doge', 'foobarbaz', 'blahblahblah']) // random garbage
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	
	cli.parseArgs(['verify', 'ltc', 'T8ij1U78E1u9HdMRi7L1KC5GZRsnF4XWRc29v6Xed7VQmuBwsxxY', 'LSfUpaHB3CrnkzebiSM1bujhqk4G4cDz9p']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address");
	cli.parseArgs(['verify', 'ltc', 'T8ij1U78E1u9HdMRi7L1KC5GZRsnF4XWRc29v6Xed7VQmuBwsxxY', 'LsfUpaHB3CrnkzebiSM1bujhqk4G4cDz9p']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'ltc', 'T7ij1U78E1u9HdMRi7L1KC5GZRsnF4XWRc29v6Xed7VQmuBwsxxY', 'LSfUpaHB3CrnkzebiSM1bujhqk4G4cDz9p']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'ltc', 'foobarbaz', 'blahblahblah']) // random garbage
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	
	cli.parseArgs(['verify', 'nmc', 'TdwEngdXrdFeerupuvXx8zWodr8pEkrJ96YrUY3Ucsq5tZTAziqH', 'N6F9MRBrsKZWKW9q1ByQqAWQXx8mJEYMvm']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address");
	cli.parseArgs(['verify', 'nmc', 'TdwEngdXrdFeerupuvXx8zWodr8pEkrJ96YrUY3Ucsq5tZTAziqH', 'N5F9MRBrsKZWKW9q1ByQqAWQXx8mJEYMvm']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'nmc', 'TDwEngdXrdFeerupuvXx8zWodr8pEkrJ96YrUY3Ucsq5tZTAziqH', 'N6F9MRBrsKZWKW9q1ByQqAWQXx8mJEYMvm']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'nmc', 'foobarbaz', 'blahblahblah']) // random garbage
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	
	cli.parseArgs(['verify', 'ppc', 'W7JKSqgmn31Q57N4RSFoXgfmSGMPVScWLZEc73Zwkh3kfC5X9FM2', 'UQH7SugCBGYzJCbYuVBRfwAvQevwBeFKgn']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address");
	cli.parseArgs(['verify', 'ppc', 'W7JKSqgmn31Q57N4RSFoXgfmSGMPVScWLZEc73Zwkh3kfC5X9FM2', 'UqH7SugCBGYzJCbYuVBRfwAvQevwBeFKgn']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'ppc', 'W6JKSqgmn31Q57N4RSFoXgfmSGMPVScWLZEc73Zwkh3kfC5X9FM2', 'UQH7SugCBGYzJCbYuVBRfwAvQevwBeFKgn']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	cli.parseArgs(['verify', 'ppc', 'foobarbaz', 'blahblahblah']) // random garbage
	assert.equal(consoleOutput, "Failure: The private key does not match the address");
	
	
	await cli.parseArgs(['verify', 'xmr', 'excess yacht cogs avoid shyness plotting mews nocturnal value vigilant tweezers oilfield girth dexterity does axle girth mime acidic rarest aunt juggled point python vigilant',
		'45MuEyzAuoR8LMt8NwQCeViMA8T6WpZz24Txa14GwUVhdkC67eTyx9x5Yk2UouW9saevJ727PDCNCMiPjPn13XcwTDsECnA']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address", "Monero CLI Test 1 Failed");
	await cli.parseArgs(['verify', 'xmr', 'excess yacht cogs avoid shyness plotting mews nocturnal value vigilant tweezers oilfield girth dexterity does axle girth mime acidic rarest aunt juggled point python vigilant',
		'45MUEyzAuoR8LMt8NwQCeViMA8T6WpZz24Txa14GwUVhdkC67eTyx9x5Yk2UouW9saevJ727PDCNCMiPjPn13XcwTDsECnA']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address", "Monero CLI Test 2 Failed");
	await cli.parseArgs(['verify', 'xmr', 'acidic yacht cogs avoid shyness plotting mews nocturnal value vigilant tweezers oilfield girth dexterity does axle girth mime acidic rarest aunt juggled point python vigilant',
		'45MuEyzAuoR8LMt8NwQCeViMA8T6WpZz24Txa14GwUVhdkC67eTyx9x5Yk2UouW9saevJ727PDCNCMiPjPn13XcwTDsECnA']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address", "Monero CLI Test 3 Failed");

	
	await cli.parseArgs(['verify', 'iota', 'WWG9RPUYNWWTLPXLHQDQVYRHUQGWBVNMQVR9KFODOJPAVGMSUBVVIDPDCIPHYGCJAWSHRTSXGFPNBJPFE',
		'LCZHBSFIBOZQDV9OIQXHYNBFQYHNHHUVSPWSYGCSVYLWOAESSVCWBKBWUWZKRUQQDXDKKPZXOUWADHUX9GVJR9IMXW']) // matches
	assert.equal(consoleOutput, "Success: The private key matches the address", "IOTA CLI Test 1 Failed");
	await cli.parseArgs(['verify', 'iota', 'WWG9RPUYNWWTLPXLHQDQVYRHUQGWBVNMQVR9KFODOJPAVGMSUBVVIDPDCIPHYGCJAWSHRTSXGFPNBJPFE',
		'ACZHBSFIBOZQDV9OIQXHYNBFQYHNHHUVSPWSYGCSVYLWOAESSVCWBKBWUWZKRUQQDXDKKPZXOUWADHUX9GVJR9IMXW']) // address doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address", "IOTA CLI Test 2 Failed");
	await cli.parseArgs(['verify', 'iota', 'AWG9RPUYNWWTLPXLHQDQVYRHUQGWBVNMQVR9KFODOJPAVGMSUBVVIDPDCIPHYGCJAWSHRTSXGFPNBJPFE',
		'LCZHBSFIBOZQDV9OIQXHYNBFQYHNHHUVSPWSYGCSVYLWOAESSVCWBKBWUWZKRUQQDXDKKPZXOUWADHUX9GVJR9IMXW']) // private key doesn't match
	assert.equal(consoleOutput, "Failure: The private key does not match the address", "IOTA CLI Test 3 Failed");
	
	log("CLI Tests Passed\n\nAll Tests Passed");
	}catch(err){
		log(err);
		log(consoleOutput);
		console.log = log;
	}
}
runTests();