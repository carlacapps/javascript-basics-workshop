var bankCollection = [];

exports.convertToIds = function (banks) {
	var i = 0,
		len = banks.length;

	for (i; i < len; i++) {
		bankCollection.push(banks[i].id);
	}

	return bankCollection;
};
exports.convertToConfirmedIds = function (banks) {
	var i = 0,
		len = banks.length;

	for (i; i < len; i++) {
		if (banks[i].confirmed) {
			bankCollection.push(banks[i].id);
		}
	}

	return bankCollection;
};