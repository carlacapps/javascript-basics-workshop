var tape = require('tape');
var banksModel = require('./banks.async');

var banks = banksModel.collection();

tape('Test our bank utilities', function (t) {
	t.deepEqual(
		banks[0],
		{ id: 1234, name: "Bank of America", confirmed: true },
		'The first bank in the array should be.'
	);
	t.end();
});