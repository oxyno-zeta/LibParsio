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
	function ParseController(parseService) {
		var vm = this;
		// Variables
		vm.allPossibleParsing = parseService.allPossibleParsing;
		vm.selectedParsing = undefined;
		vm.manifest = undefined;
		vm.editorOptions = {
			lineWrapping : true,
			lineNumbers: true
		};
		vm.successResult = undefined;
		vm.errorMessage = undefined;
		// Functions
		vm.parse = parse;


		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */

		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Parse.
		 */
		function parse(){
			// Clean variables
			vm.successResult = undefined;
			vm.errorMessage = undefined;
			// Parse
			parseService.parse(vm.selectedParsing, vm.manifest).then(function(result){
				console.log(result);
				vm.successResult = result;
			}, function(err){
				if (!_.isString(err)){
					err = 'Error in parsing';
				}
				vm.errorMessage = err;
			});
		}
	}

})();

