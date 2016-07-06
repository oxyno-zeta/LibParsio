/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 26/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.activate')
		.run(runUpdateService);

		/** @ngInject */
		function runUpdateService ($timeout, updateService) {
		    // Init
			$timeout(function(){
				updateService.initialize();
			}, 2000);
		}

})();