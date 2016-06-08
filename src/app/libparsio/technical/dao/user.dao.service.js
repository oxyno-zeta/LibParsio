/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 08/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.dao')
		.factory('userDaoService', userDaoService);

	/** @ngInject */
	function userDaoService($q, apiWrapperService, URL_CONSTANT, PARAMS_CONSTANT) {
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
			var url = URL_CONSTANT.GITHUB_USER.URL;
			url = url.replace(URL_CONSTANT.GITHUB_USER.LOGIN_KEY, username);
			var params = {};
			params[PARAMS_CONSTANT.api_key] = apiKey;
			var config = {
				params: params
			};

			apiWrapperService.getMethod(url, config).then(deferred.resolve, deferred.reject);
			return deferred.promise;
		}
	}

})();


