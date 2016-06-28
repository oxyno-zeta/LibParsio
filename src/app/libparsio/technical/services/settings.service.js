/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 28/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.services')
		.factory('settingsService', settingsService);

	/** @ngInject */
	function settingsService(settingsDaoService) {
		var service = {
			getSettings: getSettings,
			setSettings: setSettings
		};
		return service;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */



		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Set Settings.
		 * @param settings {Object} Settings
		 * @returns {*|promise.promise|jQuery.promise|*|d.promise|promise}
		 */
		function setSettings(settings){
			return settingsDaoService.setSettings(settings);
		}

		/**
		 * Get Settings.
		 * @returns {*|promise.promise|jQuery.promise|*|d.promise|promise}
		 */
		function getSettings() {
			return settingsDaoService.getSettings();
		}
	}

})();

