'use strict';

exports.create = function (state) {
	return function (action) {
		switch (action.type) {
			case 'CONFIRM_BANK':
				state[action.id].confirmed = true;
				return state;
			default:
				return state;
		}
	}
};