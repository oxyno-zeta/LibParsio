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
	function InitializeController($timeout, $state, userService, systemService, URL_CONSTANT) {
		var vm = this;
		// Variables
		vm.username = undefined;
		vm.apiKey = undefined;
		vm.errorMessage = false;
		vm.loadingMessage = false;
		vm.successMessage = false;
		vm.isHelpPanelShown = false;
		vm.isHelpPanelOpen = true;
		// Functions
		vm.submit = submit;
		vm.howToGetData = howToGetData;
		vm.openAccountInBrowser = openAccountInBrowser;
		vm.isSubmitDisabled = isSubmitDisabled;

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
		 * Check if submit button is disabled.
		 * @returns {boolean}
		 */
		function isSubmitDisabled(){
			return (_.isUndefined(vm.username) || _.isEqual(vm.username.length, 0) ||
					_.isUndefined(vm.apiKey) || _.isEqual(vm.apiKey.length, 0));
		}

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
				// Change page
				$timeout(function(){
					$state.go('header.parse');
				}, 500);
			}, function(){
				// Error
				vm.errorMessage = true;
			}).finally(function(){
				vm.loadingMessage = false;
			});
		}

		/**
		 * How to get data.
		 */
		function howToGetData(){
			// Reset value
			if (vm.isHelpPanelShown){
				vm.isHelpPanelOpen = true;
			}
			// Change visibility for help panel
			vm.isHelpPanelShown = !vm.isHelpPanelShown;
		}

		/**
		 * Open Account in Browser.
		 */
		function openAccountInBrowser(){
			systemService.openInBrowser(URL_CONSTANT.ACCOUNT_URL);
		}
	}

})();

