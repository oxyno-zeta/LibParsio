/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 11/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.settings.general')
		.config(routeConfig);

		/** @ngInject */
		function routeConfig ($stateProvider) {
		    // State configuration
			$stateProvider
				.state('header.settings.general', {
					url: '/general',
					views: {
						'content@header': {
							templateUrl: 'libparsio/views/settings/general/general.html',
							controller: 'GeneralSettingsController',
							controllerAs: 'generalSettingsCtrl'
						}
					},
					resolve: {
						settings: function(settingsService){
							return settingsService.getSettings();
						}
					}
				})
		}

})();