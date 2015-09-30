(function () {
	'use strict';
	
	angular
		.module ('dashboard')
		.run (DashboardRoutes);
	
	DashboardRoutes.$inject = [
		'routerHelper',
		'$auth',
		'$authWrapper'
	];
	
	function DashboardRoutes (routerHelper, $auth, $authWrapper) {
		routerHelper.configureStates (GetStates ());
		
		function GetStates () {
			return [
				{
					state: 'dashboard',
					config: {
						url: '/dashboard',
						views: {
							'body': {
								templateUrl: 'app/dashboard/dashboard.template.html',
								controller: 'dashboardCtrl',
								controllerAs: 'vm'
							}
						},
						resolve: {
							"requiredAuth": RequireAuth
						}
					}
				}
			];
		}
		
		function RequireAuth () {
			return $authWrapper.requireAuth ($auth);
		}
	}
}) ();