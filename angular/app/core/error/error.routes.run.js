/**
 * Error Routes
 * @namespace Route
 *
 * @memberof Application.Core.Error
 */
(function () {
	'use strict';
	
	angular
		.module ('core.error')
		.run (ErrorRoutes);
	
	// Dependencies
	ErrorRoutes.$inject = [
		'routerHelper',
		'$logger'
	];
	
	/**
	 * @function ErrorRoutes
	 * @desc Setup the error state
	 *
	 * @memberof Application.Core.Error.Route
	 */
	function ErrorRoutes (routerHelper, $logger) {
		routerHelper.configureStates (GetStates ());
		
		/**
		 * @function GetStates
		 * @desc - Setup the views and urls that associate with the error state
		 * @return {Array} - An array of states w/ the necessary configuration parameters.
		 */
		function GetStates () {
			return [ 
				{
					state: 'error',
					config: {
						url: '/error',
						views: {
							'navbar': {
								template: '<widget-default-navbar></widget-default-navbar>'
							},
							'body': {
								templateUrl: 'app/core/error/error.template.html'
							},
							'footer': {
								template: '<widget-default-footer></widget-default-footer>'
							}
						}
					}
				}
			];
		}
	}
}) ();