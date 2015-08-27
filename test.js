'use strict';
var test = require('tape');
var twitterName = require('./');
test('Testing Twitter name availability', function (t) {
	t.plan(1);
	twitterName ('dserijdk', function(err, isAvailable) {
        t.equal(true, isAvailable, 'Both value matched');
	});
});

test('Testing Twitter name unavailability', function (t) {
	t.plan(1);
	twitterName ('chintsradia', function(err, isAvailable) {
	    t.equal(false, isAvailable, 'Both value matched');
	});
});