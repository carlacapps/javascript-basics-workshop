var tape = require('tape');
var conversion = require('./conversion.utils');

tape('Test our bank utilities', function (t) {

	var banks = [
		{
			id: 1234,
			name: "Bank of America",
			confirmed: true
		},
		{
			id: 5678,
			name: "Wells Fargo",
			confirmed: false
		},
		{
			id: 91011,
			name: "Citi",
			confirmed: true
		}
	];
	var bankIds = conversion.convertToIds(banks);
	var bankConfirmedIds = conversion.convertToConfirmedIds(banks);

	t.deepEqual(bankIds, [ 1234, 5678, 91011 ], 'This array should have all bank IDs.');
	t.deepEqual(bankConfirmedIds, [ 1234, 91011 ], 'This array should only have confirmed IDs.');
	t.end();
});