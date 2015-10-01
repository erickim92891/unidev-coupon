/**
 * Exception factory that provides a consistent exception catcher.
 * @namespace Exception
 *
 * @memberof Blocks
 */
(function() {
    'use strict';
	
    angular
        .module ('blocks.exception')
        .factory ('$exception', ExceptionCatcher);
	
	// Dependencies
	ExceptionCatcher.$inject = ['$q', '$logger'];
	
	/**
	 * @namespace ExceptionFactory
	 * 
	 * @function ExceptionCatcher
	 * @desc Service that provides a global exception catcher.
	 * @memberOf Blocks.Exception
	 */ 
    function ExceptionCatcher ($q, $logger) {
		/**
		 * @var {Object} service
		 * @desc Service object that returns the exception catcher function.
		 */
        var service = {
            catcher: Catcher
        };
        
		return service;

		/**
		 * @function Catcher
		 * @desc Catches an exception and logs the error
		 * @param {String} message - Error message to log
		 * @memberof Blocks.Exception.ExceptionFactory
		 * @returns {Reject} 
		 */
        function Catcher(message) {
			
			/**
			 * @param {String} reason - Error message from failed promise.
			 * @returns {Reject}
			 */
            return function (reason) {
				var data = {
					message: message,
					reason: reason
				};
				
                $logger.error (reason, data, message);
				return $q.reject (reason);
            };
        }
    }
})();
