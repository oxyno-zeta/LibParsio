/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 08/06/16
 * Licence: See Readme
 */

(function () {
	'use strict';

	angular
		.module('libparsio.technical.wrapper')
		.factory('apiWrapperService', apiWrapperService);

	/** @ngInject */
	function apiWrapperService($http, $q) {
		var service = {
			getMethod: getMethod
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
		 * Get.
		 * @param url {String} url
		 * @param config {Object} config
		 * @returns {*}
		 */
		function getMethod(url, config) {
			var deferred = $q.defer();

			if (_.isUndefined(config)){
				config = {};
			}

			$http.get(url, config).then(function(result){
				deferred.resolve(result.data);
			}, deferred.reject);

			return deferred.promise;
		}
	}

})();


