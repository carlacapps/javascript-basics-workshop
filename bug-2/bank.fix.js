var tape = require('tape');
var banksModel = require('./banks.model');

tape('Test our get bank method', function (t) {

	var getBank = banksModel.get;

	// waves hands ...

	var bank = getBank(1234);
	t.deepEqual(
		bank,
		{ id: 1234, name: "Bank of America", confirmed: true },
		'This should return just the Bank of America bank.'
	);
	t.end();
});