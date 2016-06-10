/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 11/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.parse')
		.config(routeConfig);

		/** @ngInject */
		function routeConfig ($stateProvider) {
		    // State configuration
			$stateProvider
				.state('header.parse', {
					url: '/parse',
					views: {
						content: {
							templateUrl: 'libparsio/views/parse/parse.html'
						}
					}
				});
		}

})();