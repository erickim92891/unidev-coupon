(function () {
	'use strict';
	
	angular
		.module ('app')
		.run (AppRoutes);
	
	AppRoutes.$inject = [
		'routerHelper',
		'$logger'
	];
	
	function AppRoutes (routerHelper, $logger) {
		routerHelper.configureStates ([], 'error');
	}
}) ();