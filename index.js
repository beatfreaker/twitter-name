'use strict';
var got = require('got');

module.exports = function (userName, callback) {
	if (!(typeof userName === 'string' && userName.length !== 0)) {
		throw new Error('User Name required');
	}
	got('https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=' + userName.toLowerCase(), function (err, data) {
		if (err) {
			callback(err);
			return;
		}
		var jsonArray = JSON.parse(data);
		jsonArray.length ? callback(null, true) : callback(null, false);
	});
};
