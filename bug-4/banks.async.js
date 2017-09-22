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
exports.get = function (requestedId, callback) {
	setTimeout(function () {
		var i = 0,
			len = banks.length;

		for (i; i < len; i++) {
			if (banks[i].id === requestedId) {
				return callback(banks[i]);
			}
		}
	}, 500);
};