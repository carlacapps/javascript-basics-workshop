var tape = require('tape');
var simpleStore = require('./banks.reducer');
tape('Reducers should take in an action and return new state', function (t) {

	var banks = [
			{
				id: 0,
				name: "Bank of America",
				confirmed: true
			},
			{
				id: 1,
				name: "Wells Fargo",
				confirmed: false
			},
			{
				id: 2,
				name: "Citi",
				confirmed: true
			}
		],
		store = simpleStore.create(banks);

	var newBanks = store({
		type: 'CONFIRM_BANK',
		id: 1,
		confirmed: true
	});

	t.true(newBanks[1].confirmed, 'The second bank should be confirmed.')
	t.notEqual(newBanks, banks, 'An action should return a new object.');
	t.end();
});
