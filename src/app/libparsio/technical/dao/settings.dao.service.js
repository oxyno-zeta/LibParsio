/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 28/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.dao')
		.factory('settingsDaoService', settingsDaoService);

	/** @ngInject */
	function settingsDaoService($q, localStorageService, STORAGE_CONSTANT) {
		var service = {
			getSettings: getSettings,
			setSettings: setSettings
		};
		return service;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Initialize settings.
		 * @param settings {Object} Settings
		 * @returns {*}
		 */
		function initializeSettings(settings){
			if ( (_.isUndefined(settings.checkUpdateOnStartup) || _.isNull(settings.checkUpdateOnStartup)) &&
					!_.isBoolean(settings.checkUpdateOnStartup)){
				settings.checkUpdateOnStartup = true;
			}

			return settings;
		}

		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Set Settings.
		 * @param settings {Object} Settings
		 * @returns {promise.promise|jQuery.promise|*|d.promise|promise}
		 */
		function setSettings(settings){
			var deferred = $q.defer();

			// Set in storage
			localStorageService.set(STORAGE_CONSTANT.SETTINGS.CHECK_UPDATE_ON_STARTUP, settings.checkUpdateOnStartup);

			// Resolve
			deferred.resolve();

			return deferred.promise;
		}

		/**
		 * Get Settings.
		 * @returns {promise.promise|jQuery.promise|*|d.promise|promise}
		 */
		function getSettings() {
			var deferred = $q.defer();
			var result = {
				checkUpdateOnStartup: localStorageService.get(STORAGE_CONSTANT.SETTINGS.CHECK_UPDATE_ON_STARTUP)
			};

			// Initialize all settings
			result = initializeSettings(result);

			// Resolve
			deferred.resolve(result);

			return deferred.promise;
		}
	}

})();

