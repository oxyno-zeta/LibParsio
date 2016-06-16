/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 12/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.parse')
		.controller('ParseController', ParseController);

	/** @ngInject */
	function ParseController($filter, parseService, subscribeService) {
		var vm = this;
		// Variables
		vm.allPossibleParsing = [];
		vm.selectedParsing = undefined;
		vm.manifest = undefined;
		vm.editorOptions = {
			lineWrapping : true,
			lineNumbers: true
		};
		vm.successResult = undefined;
		vm.errorMessage = undefined;
		vm.isPanelParsingProcessOpened = true;
		vm.isPanelResultOpened = false;
		vm.isPanelErrorOpened = false;
		// Functions
		vm.parse = parse;
		vm.openInBrowser = openInBrowser;
		vm.buildCodeMirrorOptions = buildCodeMirrorOptions;

		// Activate
		activate();

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Activate.
		 */
		function activate(){
			vm.allPossibleParsing = $filter('orderBy')(parseService.allPossibleParsing, 'platform');
		}

		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Build Code Mirror Options (on ng-change).
		 */
		function buildCodeMirrorOptions(){
			if (!_.isUndefined(vm.selectedParsing)) {
				vm.editorOptions.mode = vm.selectedParsing.mode;
			}
		}

		/**
		 * Open in browser.
		 * @param platform {String} platform
		 * @param libraryName {String} library name
		 */
		function openInBrowser(platform, libraryName){
			subscribeService.openInSystemBrowser(platform, libraryName);
		}

		/**
		 * Parse.
		 */
		function parse(){
			// Clean variables
			vm.successResult = undefined;
			vm.errorMessage = undefined;
			// Parse
			parseService.parse(vm.selectedParsing.platform, vm.manifest).then(function(result){
				vm.successResult = result;

				// Open or close panels
				vm.isPanelParsingProcessOpened = false;
				vm.isPanelResultOpened = true;
				vm.isPanelErrorOpened = false;
			}, function(err){
				if (!_.isString(err)){
					err = 'Error in parsing';
				}
				vm.errorMessage = err;

				// Open or close panels
				vm.isPanelParsingProcessOpened = false;
				vm.isPanelResultOpened = false;
				vm.isPanelErrorOpened = true;
			});
		}
	}

})();

