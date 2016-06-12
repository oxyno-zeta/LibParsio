/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 11/06/16
 * Licence: See Readme
 */

var parsers = require('librarian-parsers');

(function () {
	'use strict';

	angular
		.module('libparsio.technical.wrapper')
		.factory('parseWrapperService', parseWrapperService);

	/** @ngInject */
	function parseWrapperService($q) {
		var service = {
			parse: parse
		};
		return service;

		////////////////

		/* ************************************* */
		/* ********  PRIVATE FUNCTIONS  ******** */
		/* ************************************* */

		/* ************************************* */
		/* ********   PUBLIC FUNCTIONS  ******** */
		/* ************************************* */

		/**
		 * Parse string manifest.
		 * @param platform {String} platform : npm, go...
		 * @param manifestString {String} String manifest
		 * @return result {Promise}
		 */
		function parse(platform, manifestString) {
			var deferred = $q.defer();
			try {
				parsers.parse(platform, manifestString).then(deferred.resolve, deferred.reject);
			}
			catch (ex){
				deferred.reject(ex);
			}
			return deferred.promise;
		}
	}

})();

