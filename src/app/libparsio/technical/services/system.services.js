/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 13/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.services')
		.factory('subscribeService', subscribeService);

	/** @ngInject */
	function subscribeService(systemWrapperService, URL_CONSTANT) {
		var service = {
			openInSystemBrowser: openInSystemBrowser
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
		 * Open in system browser.
		 * @param platform {String} Platform
		 * @param library {String} Library name
		 */
		function openInSystemBrowser(platform, library) {
			// Create url
			var url = URL_CONSTANT.LIBRARY_URL;
			// Replace in original
			url = url.replace(':platform', platform);
			url = url.replace(':library', encodeURIComponent(library));
			// Open in system browser
			systemWrapperService.openInSystemBrowser(url);
		}
	}

})();

