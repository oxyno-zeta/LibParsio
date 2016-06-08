/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 08/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.services')
		.factory('userService', userService);

	/** @ngInject */
	function userService(userDaoService) {
		var service = {
			getUserFromApi: getUserFromApi
		};
		return service;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */


		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		function getUserFromApi(username, apiKey) {
			userDaoService.getUserFromApi(username, apiKey);
		}
	}

})();

