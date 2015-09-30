(function () {
	'use strict';
	
	angular
		.module ('core.error')
		.run (ErrorRoutes);
	
	ErrorRoutes.$inject = [
		'routerHelper',
		'$logger'
	];
	
	function ErrorRoutes (routerHelper, $logger) {
		routerHelper.configureStates (GetStates ());
		
		function GetStates () {
			return [ 
				{
					state: 'error',
					config: {
						url: '/error',
						views: {
							'navbar': {
								template: '<widget-default-navbar></widget-default-navbar>'
							},
							'body': {
								templateUrl: 'app/core/error/error.template.html'
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