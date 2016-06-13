/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 13/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	// Shell
	var shell = require('electron').shell;

	angular
		.module('libparsio.technical.wrapper')
		.factory('systemWrapperService', systemWrapperService);

	/** @ngInject */
	function systemWrapperService() {
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
		 * @param url {String} Url
		 */
		function openInSystemBrowser(url) {
			// Open in system browser
			shell.openExternal(url);
		}
	}

})();

