/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 27/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.settings.general')
		.controller('GeneralSettingsController', GeneralSettingsController);

	/** @ngInject */
	function GeneralSettingsController(settingsService, settings) {
		var vm = this;
		// Variables
		vm.settings = settings;
		// Functions
		vm.updateSettings = updateSettings;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */



		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Update settings.
		 */
		function updateSettings(){
			settingsService.setSettings(vm.settings);
		}
	}

})();

