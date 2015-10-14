/**
 * Exception handler
 * @namespace Handler
 *
 * @memberof Application.Core.Blocks.Exception
 */
(function() {
    'use strict';

    angular
        .module ('blocks.exception')
        .provider ('exceptionHandler', ExceptionHandler);

    /**
	 * @function ExceptionHandler
	 * @memberOf Application.Core.Blocks.Exception.Handler
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
