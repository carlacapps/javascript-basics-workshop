module.exports = {
	banks: [
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
	],
	get: function (requestedId) {
		var i = 0,
			len = this.banks && this.banks.length;

		for (i; i < len; i++) {
			if (this.banks[i].id === requestedId) {
				return this.banks[i];
			}
		}
	}
};