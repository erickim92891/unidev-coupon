/**
 * Router provider that helps in global state management.
 * @namespace Router
 *
 * @memberof Blocks
 * @author johnpapa - https://github.com/johnpapa/generator-hottowel
 */
(function() {
    'use strict';

    angular
        .module ('blocks.router')
        .provider ('routerHelper', RouterHelper);
	
	// Dependencies
    RouterHelper.$inject = [
		'$locationProvider', 
		'$stateProvider', 
		'$urlRouterProvider'
	];
	
	/**
	 * @namespace RouterProvider
	 *
	 * @function RouterHelper
	 * @desc Application wide router to handle states in different files + manage (un)-successful state changes.
	 * @memberOf Blocks.Router
	 */
    function RouterHelper ($locationProvider, $stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        var config = {
            docTitle: undefined,
            resolveAlways: {}
        };
		
		// Remove the `#` symobl in angular URLs
        $locationProvider.html5Mode (true);
		
        this.configure = function (cfg) {
            angular.extend (config, cfg);
        };

        this.$get = Helper;
		
		// Dependencies
        Helper.$inject = [
			'$location', 
			'$rootScope', 
			'$state', 
			'$logger',
			'$document'
		];
		
        function Helper ($location, $rootScope, $state, $logger, $document) {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;
			
			
            function configureStates (states, otherwisePath) {
                states.forEach (function(state) {
                    state.config.resolve =
                        angular.extend (state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state (state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise (otherwisePath);
                }
            }

            function handleRoutingErrors () {
                // Route cancellation:
                // On routing error, go to the welcome page.
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on ('$stateChangeError',
                    function (event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) {
                            return;
                        }
                        stateCounts.errors++;
                        handlingStateChangeError = true;

						if (error === 'AUTH_REQUIRED') {
							$state.transitionTo ('login');
						}
                        else {
							$state.transitionTo ('error');
						}
                    }
                );
            }

            function init () {
                handleRoutingErrors ();
                updateDocTitle ();
            }

            function getStates () { return $state.get(); }

            function updateDocTitle () {
                $rootScope.$on ('$stateChangeSuccess',
                    function (event, toState, toParams, fromState, fromParams) {
						$document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
                        stateCounts.changes++;
                        handlingStateChangeError = false;
                    }
                );
            }
        }
    }
})();