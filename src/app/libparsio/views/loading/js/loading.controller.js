/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 10/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.loading')
		.controller('LoadingController', LoadingController);

	/** @ngInject */
	function LoadingController($state, userCacheService) {
		var vm = this;
		// Variables
		// Functions

		// Run
		activate();

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */

		function activate() {
			// Check user data are fully set
			if (userCacheService.isDataFullySet()) {
				$state.go('header.parse');
			}
			else {
				$state.go('header.initialize');
			}
		}

		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */


	}

})();

