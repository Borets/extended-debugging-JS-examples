const assert = require('assert');

describe('Sauce Performance Jenkins Demo', function () { // eslint-disable-line func-names
	const { title } = this;
	before(() => {
		browser.url('/');
	});

	it('Login into the cart', () => {
		const username = $('[data-test="username"]');
		username.setValue(process.env.PERF_USERNAME || 'standard_user');
		const password = $('[data-test="password"]');
		password.setValue('secret_sauce');
		const loginButton = $('.btn_action');
		loginButton.click();
		browser.url('/inventory.html');
	});
	
});
