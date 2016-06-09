/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 08/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.initialize')
		.controller('InitializeController', InitializeController);

	/** @ngInject */
	function InitializeController(userService) {
		var vm = this;
		// Variables
		vm.username = undefined;
		vm.apiKey = undefined;
		vm.errorMessage = false;
		vm.loadingMessage = false;
		vm.successMessage = false;
		// Functions
		vm.submit = submit;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Reset all view booleans.
		 */
		function resetAllViewBooleans(){
			vm.errorMessage = false;
			vm.loadingMessage = false;
			vm.successMessage = false;
		}

		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Submit data.
		 */
		function submit(){
			// Reset all booleans
			resetAllViewBooleans();

			// Loading
			vm.loadingMessage = true;

			// Api call
			userService.getUserFromApi(vm.username, vm.apiKey).then(function(){
				// Success
				vm.successMessage = true;
			}, function(){
				// Error
				vm.errorMessage = true;
			}).finally(function(){
				vm.loadingMessage = false;
			});
		}
	}

})();

