/**
 * Decorator for Exception handler
 * @namespace Decorator
 *
 * @memberof Application.Core.Blocks.Exception
 */
(function () {
	'use strict';
	
	angular
		.module ('blocks.exception')
		.config (Config);
	
	// Dependencies
	Config.$inject = ['$provide'];
	
	/**
	 * @function Config
	 * @desc Decorator for the $exceptionHandler service.
	 *
	 * @memberOf Application.Core.Blocks.Exception.Decorator
	 */
	function Config ($provide) {
		$provide.decorator ('$exceptionHandler', ExtendExceptionHandler);
		
		// Dependencies
		ExtendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', '$logger'];

		/**
		 * @function ExtendExceptionHandler
		 * @desc Extend the $exceptionHandler service to also display a toastr message.
		 * @return {Function} the decorated $exceptionHandler service
		 */
		function ExtendExceptionHandler ($delegate, exceptionHandler, $logger) {
			return function (exception, cause) {
				var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
				var errorData = {exception: exception, cause: cause};

				exception.message = appErrorPrefix + exception.message;
				$delegate (exception, cause);
				/**
				 * Could add the error to a service's collection,
				 * add errors to $rootScope, log errors to remote web server,
				 * or log locally. Or throw hard. It is entirely up to you.
				 * throw exception;
				 *
				 * @example
				 *     throw { message: 'error message we added' };
				 */
				$logger.error (exception.message, errorData);
			};
		}
	}
}) ();