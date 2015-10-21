(function () {
	'use strict';
	
	angular
		.module ('dashboard')
		.run (DashboardRoutes);
	
	DashboardRoutes.$inject = [
		'routerHelper',
		'$unidevAuth',
		'$authMessages',
		'$exception'
	];
	
	function DashboardRoutes (routerHelper, $unidevAuth, $authMessages, $exception) {
		routerHelper.configureStates (GetStates ());
		
		function GetStates () {
			return [
				{
					state: 'dashboard',
					config: {
						url: '/dashboard',
						views: {
							'navbar': {
								template: '<widget-user-navbar></widget-user-navbar>'
							},
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
			return $unidevAuth.$requireAuth ()
				.catch ($exception.catcher ($authMessages.AUTH_LOGIN_REQUIRED));
		}
	}
}) ();