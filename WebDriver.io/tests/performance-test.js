const assert = require('assert');

describe('Sauce Performance UHG Demo', function () { // eslint-disable-line func-names
	const { title } = this;
	before(() => {
		browser.url('https://wwww.saucelabs.com/');
	});

	it('Get a quote', () => {
		const zipcode = $('#inputZIP');
		zipcode.setValue('94109');
		const loginButton = $('#inputZIPbtn');
		loginButton.click();
		browser.url('https://www.uhone.com/shop/#/census?zipcode=94109');
	});
	
});
