/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 06/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.welcome')
		.config(routeConfig);

		/** @ngInject */
		function routeConfig ($stateProvider) {
		    // State config
			$stateProvider
				.state('header.welcome', {
					url: '/',
					views: {
						'content': {
							templateUrl: 'libparsio/views/welcome/welcome.html'
						}
					}
				});
		}

})();