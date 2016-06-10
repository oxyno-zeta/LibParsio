/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 06/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.header')
		.config(routeConfig);

		/** @ngInject */
		function routeConfig ($stateProvider) {
		    // State configuration
			$stateProvider
				.state('header', {
					abstract: true,
					views: {
						'content': {
							templateUrl: 'libparsio/views/header/header.html',
							controller: 'HeaderController',
							controllerAs: 'headerCtrl'
						}
					}
				});
		}

})();