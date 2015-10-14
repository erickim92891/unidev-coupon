/**
 * Toastr configuration parameters
 * @namespace Config
 *
 * @memberof Application.Core.Blocks.Logger
 */
(function () {
	'use strict';
	
	angular
		.module ('blocks.logger')
		.config (Config);
	
	// Dependencies
	Config.$inject = ['toastr'];
	
	/**
	 * @function Config
	 * @desc Override toastr configuration parameters
	 *
	 * @memberOf Application.Core.Blocks.Logger.Config
	 */
	function Config (toastr) {
		toastr.options.timeOut = 5000;
		toastr.options.positionClass = 'toast-bottom-left';
	}
}) ();