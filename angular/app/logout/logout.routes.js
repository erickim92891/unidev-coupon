(function () {
	'use strict';
	
	angular
		.module ('logout')
		.run (LogoutRoutes);
	
	LogoutRoutes.$inject = [
		'routerHelper'
	];
	
	function LogoutRoutes (routerHelper) {
		routerHelper.configureStates (GetStates ());
		
		function GetStates () {
			return [
				{
					state: 'logout',
					config: {
						views: {
							'body': {
								controller: "logoutCtrl"
							}
						}
					}
				}
			];
		}
	}
}) ();