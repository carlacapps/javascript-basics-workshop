'use strict';

exports.create = function (state) {
	return function (action) {
		switch (action.type) {
			case 'CONFIRM_BANK':
				return (function () {
					var startOfArray = state.slice(0, action.id),
						bank = state[action.id],
						endOfArray = state.slice(action.id + 1, state.length);

					return startOfArray.concat(
							[{ id: bank.id, name: bank.name, confirmed: true }],
							endOfArray
						);
				}());
			default:
				return state;
		}
	}
};