/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 16/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.filter')
		.filter('capitalizeFirstLetter', capitalizeFirstLetter);

	function capitalizeFirstLetter() {
		return capitalizeFirstLetterFilter;

		////////////////

		function capitalizeFirstLetterFilter(input) {
			return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
		}
	}

})();

