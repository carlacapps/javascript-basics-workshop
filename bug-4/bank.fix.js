var tape = require('tape');
var banksModel = require('./banks.async');

tape('Test the multiple asynchronous gets', function (t) {

	var requestedBanks = [ 1234, 5678 ];

	var i = 0,
		len = requestedBanks.length
		banks = [],
		returnedBanks = 0;

	for (i; i < len; i++) {
		banksModel.get(requestedBanks[i], function (bank) {
			banks[i] = bank;
			returnedBanks++;
			if (returnedBanks === len) {
				completeAction();
			}
		});
	}

	function completeAction() {
		t.deepEqual(
			banks,
			[
				{
					id: 1234,
					name: "Bank of America",
					confirmed: true
				},
				{
					id: 5678,
					name: "Wells Fargo",
					confirmed: false
				}
			],
			'Array should be of the banks requested.'
		);
		t.end();
	}
});
