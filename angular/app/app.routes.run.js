/**
 * Main application routes
 * @namespace Application
 */
(function () {
	'use strict';
	
	angular
		.module ('app')
		.run (AppRoutes);
	
	// Dependencies
	AppRoutes.$inject = [
		'routerHelper'
	];
	
	/**
	 * @namespace ApplicationRoutes
	 *
	 * @function AppRoutes
	 * @desc Redirect to the error state if the desired state/route is not defined.
	 * @memberof Application
	 */
	function AppRoutes (routerHelper) {
		// Second parameter of routerHelper is the `otherwise` case.
		routerHelper.configureStates ([], 'error');
	}
}) ();