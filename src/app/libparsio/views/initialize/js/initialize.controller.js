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
		// Functions
		vm.submit = submit;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */


		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		function submit(){
			userService.getUserFromApi(vm.username, vm.apiKey);
		}
	}

})();

