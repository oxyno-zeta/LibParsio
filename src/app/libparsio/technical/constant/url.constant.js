/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 08/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.constant')
		.constant('URL_CONSTANT', {
			'GITHUB_USER': {
				URL: 'https://libraries.io/api/github/:login',
				LOGIN_KEY: ':login'
			},
			'LIBRARY_URL': 'https://libraries.io/:platform/:library',
			'ACCOUNT_URL': 'https://libraries.io/account',
			'GITHUB_PROJECT': {
				'API':{
					'RELEASE': 'https://api.github.com/repos/oxyno-zeta/libparsio/releases'
				}
			}
		});

})();