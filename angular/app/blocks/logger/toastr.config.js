/**
 * Toastr configuration parameters
 * @namespace Toastr
 *
 * @memberof Blocks.Logger
 */
(function () {
	'use strict';
	
	angular
		.module ('blocks.logger')
		.config (Config);
	
	// Dependencies
	Config.$inject = ['toastr'];
	
	/**
	 * @namespace ToastrConfig
	 *
	 * @function Config
	 * @desc Override toastr configuration parameters
	 * @memberOf Blocks.Logger.Toastr
	 */
	function Config (toastr) {
		toastr.options.timeOut = 5000;
		toastr.options.positionClass = 'toast-bottom-left';
	}
}) ();