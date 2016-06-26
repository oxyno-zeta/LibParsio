/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 26/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.views.modal')
		.factory('modalService', modalService);

	/** @ngInject */
	function modalService($q, $uibModal) {
		var service = {
			runUpdateModal: runUpdateModal
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
		 * Run Update Modal.
		 * @param newVersion {String} new version
		 * @returns {promise.promise|jQuery.promise|*|d.promise|promise}
		 */
		function runUpdateModal(newVersion) {
			var deferred = $q.defer();

			var modalInstance = $uibModal.open({
				templateUrl: 'libparsio/views/modal/html/needUpdate.html',
				controller: 'NeedUpdateController',
				controllerAs: 'needUpdateCtrl',
				resolve: {
					newVersion: function(){
						return newVersion;
					}
				}
			});

			modalInstance.result.then(deferred.resolve, deferred.reject);

			return deferred.promise;
		}
	}

})();

