/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 07/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.header')
		.controller('HeaderController', HeaderController);

	/** @ngInject */
	function HeaderController($rootScope, $state, userCacheService) {
		var vm = this;
		// Variables
		vm.dataSet = userCacheService.isDataFullySet();
		vm.userCache = userCacheService.userCache;
		// Functions
		vm.openMainPage = openMainPage;


		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */


		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Open main page.
		 */
		function openMainPage(){
			// Check if data are fully set
			if (userCacheService.isDataFullySet()){
				$state.go('header.parse')
			}
			else {
				$state.go('header.initialize');
			}
		}


		/* ************************************* */
		/* ********        EVENTS       ******** */
		/* ************************************* */

		$rootScope.$on('userCache:dataSet', function(){
			vm.dataSet = true;
		});

	}

})();

