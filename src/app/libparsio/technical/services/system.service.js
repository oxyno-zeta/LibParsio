/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 15/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.services')
		.factory('systemService', systemService);

	/** @ngInject */
	function systemService(systemWrapperService) {
		var service = {
			openInBrowser: openInBrowser
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
		 * @param url {String} url
		 */
		function openInBrowser(url) {
			systemWrapperService.openInSystemBrowser(url);
		}
	}

})();

