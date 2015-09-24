/**
 * Exception factory 
 * @namespace Blocks
 */
(function() {
    'use strict';
	
    angular
        .module ('blocks.exception')
        .factory ('$exception', Exception);
	
	// Inject dependencies
	Exception.$inject = ['$q', '$logger'];
	
	/**
	 * @namespace Exception
	 * @desc Application wide exception logger
	 * @memberOf Blocks
	 */ 
    function Exception ($q, $logger) {
        var service = {
            catcher: Catcher
        };
        
		return service;

		/**
		 * @name Catcher
		 * @desc Catches an exception and logs the error
		 * @param {String} message Error message to log
		 * @returns {Reject} 
		 * @memberOf Blocks.Exception
		 */
        function Catcher(message) {
            return function (e) {
                var thrownDescription;
                var newMessage;
                
				if (e.data && e.data.description) {
                    thrownDescription = '\n' + e.data.description;
                    newMessage = message + thrownDescription;
                }
                e.data.description = newMessage;
                $logger.error (newMessage);
                
				return $q.reject (e);
            };
        }
    }
})();
