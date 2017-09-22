var tape = require('tape');
var banksModel = require('./banks.async');

tape('Test the multiple asynchronous gets', function (t) {

	var requestedBanks = [ 1234, 5678 ];

	var banks = [],
		returnedBanks = 0;

	requestedBanks.forEach(function (requestedBank, i) {
		banksModel.get(requestedBanks[i], function (bank) {
			banks[i] = bank;
			returnedBanks++;
			if (returnedBanks === requestedBanks.length) {
				completeAction();
			}
		});
	});

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
