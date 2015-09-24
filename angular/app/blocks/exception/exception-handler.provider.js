/**
 * Exception handler
 * @namespace Blocks
 */
(function() {
    'use strict';

    angular
        .module ('blocks.exception')
        .provider ('exceptionHandler', ExceptionHandlerProvider);

    /**
	 * @namespace Exception
	 * @desc Exception handler provider
	 * @memberOf Blocks
	 */
    function ExceptionHandlerProvider () {
        /* jshint validthis:true */
        this.config = {
            appErrorPrefix: undefined
        };

        this.configure = function (appErrorPrefix) {
            this.config.appErrorPrefix = appErrorPrefix;
        };

        this.$get = function() {
            return {
				config: this.config
			};
        };
    }
})();
