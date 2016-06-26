/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 25/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.services')
		.factory('updateService', updateService);

	/** @ngInject */
	function updateService($q, updateDaoService, updateWrapperService, updateCacheService) {
		var service = {
			initialize: initialize
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
		 * Initialize.
		 */
		function initialize() {
			var promises = [];

			promises.push(updateDaoService.getReleases());
			promises.push(updateWrapperService.getAppVersion());

			$q.all(promises).then(function(response){
				var release = response[0];
				var appVersion = response[1];

				var version = updateWrapperService.clean(release['tag_name']);

				// Check if version if greater than actual
				var isGreaterThan = updateWrapperService.isGreaterThan(version, appVersion);
				if (isGreaterThan){
					updateCacheService.putAllData(true, version);
				}
			});
		}
	}

})();

