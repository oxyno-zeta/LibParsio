/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 08/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.services')
		.factory('userService', userService);

	/** @ngInject */
	function userService($q, userDaoService, userCacheService) {
		var service = {
			getUserFromApi: getUserFromApi
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
		 * Get User From Api.
		 * @param username {String} User name
		 * @param apiKey {String} Api Key
		 * @returns {*}
		 */
		function getUserFromApi(username, apiKey) {
			var deferred = $q.defer();
			userDaoService.getUserFromApi(username, apiKey).then(function(result){
				userCacheService.putApiToken(apiKey);
				userCacheService.putUserName(username);
				userCacheService.putUserData(result.data);
				deferred.resolve();
			}, function(){
				deferred.reject();
			});
			return deferred.promise;
		}
	}

})();

