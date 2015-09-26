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
								//templateUrl: 'app/widgets/navbar/default.navbar.template.html'
								template: '<widget-default-navbar></widget-default-navbar>'
							},
							'body': {
								templateUrl: 'app/welcome/welcome.body.template.html'
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