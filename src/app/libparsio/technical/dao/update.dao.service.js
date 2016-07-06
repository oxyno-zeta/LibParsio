/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 25/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.dao')
		.factory('updateDaoService', updateDaoService);

	/** @ngInject */
	function updateDaoService($q, apiWrapperService, URL_CONSTANT) {
		var service = {
			getReleases: getReleases
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
		 * Get project releases.
		 * @returns {promise.promise|jQuery.promise|*|d.promise|promise}
		 */
		function getReleases() {
			var deferred = $q.defer();
			apiWrapperService
				.getMethod(URL_CONSTANT.GITHUB_PROJECT.API.RELEASE_LATEST, {})
				.then(deferred.resolve, deferred.reject);
			return deferred.promise;
		}
	}

})();

