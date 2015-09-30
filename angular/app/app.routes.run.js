/**
 * Main application routes
 *
 * @namespace ApplicationRoutes
 * @memberof Application
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
	 * @function AppRoutes
	 * @desc Redirect to the error state if the desired state/route is not defined.
	 * @memberof ApplicationRoutes
	 */
	function AppRoutes (routerHelper) {
		// Second parameter of routerHelper is the `otherwise` case.
		routerHelper.configureStates ([], 'error');
	}
}) ();