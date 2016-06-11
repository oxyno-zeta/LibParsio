/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 11/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.settings.user')
		.config(routeConfig);

		/** @ngInject */
		function routeConfig ($stateProvider) {
		    // State configuration
			$stateProvider
				.state('header.settings.user', {
					url: '/user',
					views: {
						'content@header': {
							templateUrl: 'libparsio/views/settings/user/user.html',
							controller: 'UserSettingsController',
							controllerAs: 'userSettingsCtrl'
						}
					}
				})
		}

})();