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
	function HeaderController($timeout, $rootScope, $state, userCacheService, updateCacheService) {
		var vm = this;
		// Variables
		vm.isDataSet = userCacheService.isDataFullySet();
		vm.userCache = userCacheService.userCache;
		vm.updateCache = updateCacheService.cache;
		vm.isUpdateTooltipOpened = false;
		vm.updateMessage = '';
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

		$rootScope.$on('updateCache:dataSet', function(){
			// Update message
			vm.updateMessage = 'A new version (' + updateCacheService.cache.newVersion + ') is available !';
			// Force open tooltip
			$timeout(function(){
				vm.isUpdateTooltipOpened = true;
			}, 200);
		});

		$rootScope.$on('userCache:dataSet', function(){
			vm.isDataSet = true;
		});

		$rootScope.$on('userCache:dataRemoved', function(){
			vm.isDataSet = false;
		});

	}

})();

