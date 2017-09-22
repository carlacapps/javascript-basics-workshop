var tape = require('tape');
var banksModel = require('./banks.async');

tape('Test our async bank collection method', function (t) {

	var banks = banksModel.collection();

	t.deepEqual(
		banks[0],
		{ id: 1234, name: "Bank of America", confirmed: true },
		'The first bank in the array should be Bank of America.'
	);
	t.end();
});