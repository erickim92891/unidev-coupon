/**
 * Logger factory that generates toastr messages
 * @namespace Service
 *
 * @memberof Application.Core.Blocks.Logger
 */
(function () {
	'use strict';
	
	angular
		.module ('blocks.logger')
		.factory ('$logger', LoggerService);
	
	// Dependencies
	LoggerService.$inject = [
		'$log', 
		'toastr'
	];
	
	/**
	 * @function LoggerService
	 * @desc Application wide logger service using toastr messages.
	 * @memberof Application.Core.Blocks.Logger.Service
	 */
    function LoggerService ($log, toastr) {
        var service = {
            showToasts: true,

            error   : error,
            info    : info,
            success : success,
            warning : warning,

            // Bypass toastr message and directly log to console
            log     : $log.log
        };

        return service;

		/**
		 * @function error
		 * @desc - Toastr + console error message
		 * @param {String} message - Error description
		 * @param {Object} data - Error object
		 * @param {String} title - Error title
		 */
        function error (message, data, title) {
            toastr.error(message, title);
            $log.error ('Error: ' + message, data);
        }
		
		/**
		 * @function info
		 * @desc - Toastr + console info message
		 * @param {String} message - info description
		 * @param {Object} data - info object
		 * @param {String} title - info title
		 */
        function info (message, data, title) {
            toastr.info(message, title);
            $log.info ('Info: ' + message, data);
        }
		
		/**
		 * @function success
		 * @desc - Toastr + console success message
		 * @param {String} message - success description
		 * @param {Object} data - success object
		 * @param {String} title - success title
		 */
        function success (message, data, title) {
            toastr.success(message, title);
            $log.info ('Success: ' + message, data);
        }

		/**
		 * @function warning
		 * @desc - Toastr + console warning message
		 * @param {String} message - warning description
		 * @param {Object} data - warning object
		 * @param {String} title - warning title
		 */
        function warning (message, data, title) {
            toastr.warning(message, title);
            $log.warn ('Warning: ' + message, data);
        }
	}
}) ();