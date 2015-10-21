(function () {
	'use strict';
	
	angular
		.module ('login')
		.run (LoginRoutes);
	
	LoginRoutes.$inject = [
		'routerHelper'
	];
	
	function LoginRoutes (routerHelper) {
		routerHelper.configureStates (GetStates ());
		
		function GetStates () {
			return [
				{
					state: 'login',
					config: {
						url: '/login',
						views: {
							'navbar': {
								template: '<widget-default-navbar></widget-default-navbar>'
							},
							'body': {
								templateUrl: 'app/login/login.main.template.html',
								controller: 'loginFormCtrl',
								controllerAs: 'vm'
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