/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 11/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.settings.user')
		.controller('UserSettingsController', UserSettingsController);

	/** @ngInject */
	function UserSettingsController(userCacheService) {
		var vm = this;
		vm.cache = userCacheService.userCache;

		activate();

		////////////////

		function activate() {
			console.log(vm.cache);
		}
	}

})();

