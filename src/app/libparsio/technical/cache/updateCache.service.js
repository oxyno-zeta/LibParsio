/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 25/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.cache')
		.factory('updateCacheService', updateCacheService);

	/** @ngInject */
	function updateCacheService($rootScope) {
		var service = {
			cache: {
				needUpdate: false,
				newVersion: ''
			},
			putAllData: putAllData,
			removeAllData: removeAllData
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
		 * Remove all data.
		 */
		function removeAllData(){
			// Set in cache
			service.cache.needUpdate = false;
			service.cache.newVersion = '';
			// Sending event
			$rootScope.$broadcast('updateCache:dataRemoved');
		}

		/**
		 * Put all data.
		 * @param needUpdate {boolean} need update
		 * @param newVersion {String} new version
		 */
		function putAllData(needUpdate, newVersion){
			// Set in cache
			service.cache.needUpdate = needUpdate;
			service.cache.newVersion = newVersion;
			// Sending event
			$rootScope.$broadcast('updateCache:dataSet');
		}

	}

})();

