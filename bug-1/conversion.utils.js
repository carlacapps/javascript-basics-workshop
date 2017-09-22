exports.convertToIds = function (banks) {
	return banks.map(function (bank) {
			return bank.id;
		});
};
exports.convertToConfirmedIds = function (banks) {
	return banks.filter(function (bank) {
			return bank.confirmed;
		})
		.map(function (bank) {
			return bank.id;
		});
};