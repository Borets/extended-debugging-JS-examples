const assert = require('assert');

describe('Sauce Performance Jenkins Demo', function () { // eslint-disable-line func-names
	const { title } = this;
	before(() => {
		browser.url('https://www.uhone.com/');
	});

	it('Get a quote', () => {
		const zipcode = $('#inputZIP');
		zipcode.setValue('94109');
		const loginButton = $('#inputZIPbtn');
		loginButton.click();
	});
	
});
