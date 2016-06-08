/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 08/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.constant')
		.constant('STORAGE_CONSTANT', {
			USER: {
				API_KEY: 'user-api-key',
				USERNAME: 'user-username',
				USERDATA: 'user-user-data'
			}
		});

})();