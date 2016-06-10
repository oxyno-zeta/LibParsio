/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 06/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.loading')
		.config(routeConfig);

		/** @ngInject */
		function routeConfig ($stateProvider) {
		    // State config
			$stateProvider
				.state('header.loading', {
					url: '/',
					views: {
						'content': {
							templateUrl: 'libparsio/views/loading/loading.html',
							controller:'LoadingController',
							controllerAs: 'loadingCtrl'
						}
					}
				});
		}

})();