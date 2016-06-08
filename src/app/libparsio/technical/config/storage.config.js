/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 08/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.config')
		.config(storageConfig);

		/** @ngInject */
		function storageConfig (localStorageServiceProvider) {
			localStorageServiceProvider.setPrefix('libparsio');
		}

})();