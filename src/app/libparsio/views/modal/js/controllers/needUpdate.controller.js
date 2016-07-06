/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 26/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.modal')
		.controller('NeedUpdateController', NeedUpdateController);

	/** @ngInject */
	function NeedUpdateController($uibModalInstance, systemService, URL_CONSTANT, newVersion) {
		var vm = this;
		// Variables
		vm.newVersion = newVersion;
		// Functions
		vm.skip = skip;
		vm.download = download;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */


		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Skip this release.
		 */
		function skip(){
			// Close modal
			$uibModalInstance.close();
		}

		/**
		 * Open release page for download.
		 */
		function download(){
			// Download
			systemService.openInBrowser(URL_CONSTANT.GITHUB_PROJECT.SITE.RELEASE);
			// Close modal
			$uibModalInstance.close();
		}
	}

})();

