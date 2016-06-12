/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 11/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.services')
		.factory('parseService', parseService);

	/** @ngInject */
	function parseService($q, parseWrapperService, PARSE_CONSTANT) {
		var service = {
			parse: parse,
			allPossibleParsing: PARSE_CONSTANT.allPossibleParsing
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
		 */
		function parse(platform, manifestString) {
			var deferred = $q.defer();
			// Parse data
			parseWrapperService.parse(platform, manifestString).then(function(resultArray){
				var response = {};
				_.forEach(resultArray, function(item){
					if (_.isUndefined(response[item.type])){
						response[item.type] = [];
					}

					response[item.type].push(item);
				});
				deferred.resolve(response);
			}, deferred.reject);
			return deferred.promise;
		}
	}

})();

