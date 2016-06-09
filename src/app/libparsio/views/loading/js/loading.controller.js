/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 09/06/16
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

		function activate(){
			if (!userCacheService.isDataFullySet()){
				$state.go('header.initialize');
			}
			else {
				console.log('Initialized !')
			}
		}

		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */


	}

})();


