(function () {
	'use strict';
	
	angular
		.module ('login')
		.run (LoginRoutes);
	
	LoginRoutes.$inject = [
		'routerHelper',
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
								templateUrl: 'app/welcome/welcome.navbar.template.html'
							},
							'body': {
								templateUrl: 'app/login/login.form.template.html'
							},
							'footer': {
								templateUrl: 'app/welcome/welcome.footer.template.html'
							}
						}
					}
				}
			];
		}
	}
}) ();