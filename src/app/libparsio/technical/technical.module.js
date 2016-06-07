/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 07/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical', [
			'libparsio.technical.activate',
			'libparsio.technical.services',
			'libparsio.technical.cache',
			'libparsio.technical.dao',
			'libparsio.technical.wrapper'
		]);

})();