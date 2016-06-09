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
	function apiWrapperService($http) {
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
			if (_.isUndefined(config)){
				config = {};
			}

			return $http.get(url, config);
		}
	}

})();


