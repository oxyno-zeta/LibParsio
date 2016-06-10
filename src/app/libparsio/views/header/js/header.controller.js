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
	function HeaderController($rootScope, userCacheService) {
		var vm = this;
		// Variables
		vm.dataSet = userCacheService.isDataFullySet();
		vm.userCache = userCacheService.userCache;
		// Functions


		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */


		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */


		/* ************************************* */
		/* ********        EVENTS       ******** */
		/* ************************************* */

		$rootScope.$on('userCache:dataSet', function(){
			vm.dataSet = true;
		});

	}

})();

