(function () {
	'use strict';
	
	angular
		.module ('welcome')
		.run (WelcomeRoutes);
	
	WelcomeRoutes.$inject = [
		'routerHelper',
		'$logger'
	];
	
	function WelcomeRoutes (routerHelper, $logger) {
		routerHelper.configureStates (GetStates ());
		
		function GetStates () {
			return [ 
				{
					state: 'welcome',
					config: {
						url: '/',
						views: {
							'navbar': {
								templateUrl: 'app/welcome/welcome.navbar.template.html'
							},
							'body': {
								templateUrl: 'app/welcome/welcome.body.template.html'
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