/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 09/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.activate')
		.run(runUserCache);

		/** @ngInject */
		function runUserCache (userCacheService) {
		    // Init user cache service
			userCacheService.initialize();
		}

})();