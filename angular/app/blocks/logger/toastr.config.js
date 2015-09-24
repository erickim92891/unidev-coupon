/**
 * Logger configuration
 * @namespace Blocks
 */
(function () {
	'use strict';
	
	angular
		.module ('blocks.logger')
		.config (ToastrConfig);
	
	// Inject dependencies
	ToastrConfig.$inject = ['toastr'];
	
	/**
	 * @namespace Logger
	 * @desc Override toastr configuration
	 * @memberOf Blocks
	 */
	function ToastrConfig (toastr) {
		toastr.options.timeOut = 5000;
		toastr.options.positionClass = 'toast-bottom-left';
	}
}) ();