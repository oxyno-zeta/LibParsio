/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 11/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.settings')
		.config(routeConfig);

		/** @ngInject */
		function routeConfig ($stateProvider) {
		    // State configuration
			$stateProvider
				.state('header.settings', {
					abstract: true,
					url: '/settings'
				});
		}

})();