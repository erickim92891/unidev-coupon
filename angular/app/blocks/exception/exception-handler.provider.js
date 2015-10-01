/**
 * Exception handler
 * @namespace Exception
 *
 * @memberof Blocks
 */
(function() {
    'use strict';

    angular
        .module ('blocks.exception')
        .provider ('exceptionHandler', ExceptionHandler);

    /**
	 * @namespace ExceptionProvider
	 *
	 * @function ExceptionHandler
	 * @memberOf Blocks.Exception
	 */
    function ExceptionHandler () {
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
