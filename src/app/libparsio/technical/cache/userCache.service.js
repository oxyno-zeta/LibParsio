/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 07/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.cache')
		.factory('userCacheService', userCacheService);

	/** @ngInject */
	function userCacheService($rootScope, localStorageService, STORAGE_CONSTANT) {
		var service = {
			userCache: {
				apiKey: undefined,
				userName: undefined,
				userData: undefined
			},
			putAllData: putAllData,
			initialize: initialize,
			removeAllData: removeAllData,
			isDataFullySet: isDataFullySet
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
		 * Is data fully set in cache.
		 * @returns {boolean}
		 */
		function isDataFullySet(){
			var cache = service.userCache;
			for (var key in cache){
				if (cache.hasOwnProperty(key) && (_.isUndefined(cache[key]) || _.isNull(cache[key]))){
					return false;
				}
			}

			return true;
		}

		/**
		 * Remove all data.
		 */
		function removeAllData(){
			localStorageService.remove(STORAGE_CONSTANT.USER.API_KEY,
				STORAGE_CONSTANT.USER.USERDATA, STORAGE_CONSTANT.USER.USERNAME);
			// Set in cache
			service.userCache.userData = undefined;
			service.userCache.userName = undefined;
			service.userCache.apiKey = undefined;
			// Sending event
			$rootScope.$broadcast('userCache:dataRemoved');
		}

		/**
		 * Initialize.
		 */
		function initialize(){
			// Get from storage
			service.userCache.apiKey = localStorageService.get(STORAGE_CONSTANT.USER.API_KEY);
			service.userCache.userData = localStorageService.get(STORAGE_CONSTANT.USER.USERDATA);
			service.userCache.userName = localStorageService.get(STORAGE_CONSTANT.USER.USERNAME);
			// Sending event
			$rootScope.$broadcast('userCache:initialized');
		}

		/**
		 * Put All data.
		 * @param userName {String} Username
		 * @param apiKey {String} Api Key
		 * @param userData {Object} User data
		 */
		function putAllData(userName, apiKey, userData){
			// Set in storage
			localStorageService.set(STORAGE_CONSTANT.USER.USERDATA, userData);
			localStorageService.set(STORAGE_CONSTANT.USER.USERNAME, userName);
			localStorageService.set(STORAGE_CONSTANT.USER.API_KEY, apiKey);
			// Set in cache
			service.userCache.userData = userData;
			service.userCache.userName = userName;
			service.userCache.apiKey = apiKey;
			// Sending event
			$rootScope.$broadcast('userCache:dataSet');
		}
	}

})();

