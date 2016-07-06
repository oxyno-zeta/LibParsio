/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 25/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.wrapper')
		.factory('updateWrapperService', updateWrapperService);

	const semver = require('semver');
	const ipc = require('electron').ipcRenderer;

	/** @ngInject */
	function updateWrapperService($q, $timeout) {
		var service = {
			getAppVersion: getAppVersion,
			clean: clean,
			isGreaterThan: isGreaterThan
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
		 * Get app version.
		 * @returns {promise.promise|jQuery.promise|*|d.promise|promise}
		 */
		function getAppVersion(){
			var deferred = $q.defer();
			var answered = false;
			// Send event
			ipc.send('get-app-version');
			// Wait for response
			ipc.on('got-app-version', function (event, version) {
				if (!answered) {
					deferred.resolve(version);
				}
				answered = true;
			});

			// No response from backend application
			$timeout(function(){
				if (!answered) {
					deferred.reject();
				}
				answered = true;
			}, 2000);

			return deferred.promise;
		}

		/**
		 * Clean version.
		 * @param version {String} version
		 * @returns {*} Clean version.
		 */
		function clean(version) {
			return semver.clean(version);
		}

		/**
		 * Is version1 greater than version2
		 * @param version1 {String} Version
		 * @param version2 {String} Version
		 * @returns {*}
		 */
		function isGreaterThan(version1, version2){
			return semver.gt(version1, version2);
		}
	}

})();

