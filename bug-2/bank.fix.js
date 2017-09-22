var tape = require('tape');
var banksModel = require('./banks.model');

var getBank = banksModel.get;

tape('Test our bank utilities', function (t) {
	var bank = getBank(1234);
	t.deepEqual(
		bank,
		{ id: 1234, name: "Bank of America", confirmed: true },
		'This array should have all bank IDs.'
	);
	t.end();
});