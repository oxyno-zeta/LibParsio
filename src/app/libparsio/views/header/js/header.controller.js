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
		vm.isDataSet = userCacheService.isDataFullySet();
		vm.userCache = userCacheService.userCache;
		// Functions
		vm.openMainPage = openMainPage;
		vm.disconnect = disconnect;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */


		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Disconnect.
		 */
		function disconnect(){
			// Remove all data
			userCacheService.removeAllData();
			// Change page to initialize
			$state.go('header.initialize');
		}

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
			vm.isDataSet = true;
		});

		$rootScope.$on('userCache:dataRemoved', function(){
			vm.isDataSet = false;
		});

	}

})();

