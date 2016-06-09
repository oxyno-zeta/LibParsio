/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 07/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.initialize')
		.config(routeConfig);

		/** @ngInject */
		function routeConfig ($stateProvider) {
		    // State configuration
			$stateProvider
				.state('header.initialize', {
					url: '/initialize',
					views: {
						'content': {
							templateUrl: 'libparsio/views/initialize/initialize.html',
							controller: 'InitializeController',
							controllerAs: 'initializeCtrl'
						}
					}
				});
		}

})();