(function () {
	'use strict';
	
	angular
		.module ('register')
		.run (RegisterRoutes);
	
	RegisterRoutes.$inject = [
		'routerHelper',
	];
	
	function RegisterRoutes (routerHelper) {
		routerHelper.configureStates (GetStates ());
		
		function GetStates () {
			return [
				{
					state: 'register',
					config: {
						url: '/register',
						views: {
							'navbar': {
								templateUrl: 'app/welcome/welcome.navbar.template.html'
							},
							'body': {
								templateUrl: 'app/register/register.form.template.html'
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