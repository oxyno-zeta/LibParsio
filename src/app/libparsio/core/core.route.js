/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 06/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.core')
		.config(routeConfig);

	/** @ngInject */
	function routeConfig ($urlRouterProvider) {
		// Default url
		$urlRouterProvider.otherwise('/');
	}

})();