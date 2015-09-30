(function () {
	'use strict';
	
	angular
		.module ('register')
		.run (RegisterRoutes);
	
	RegisterRoutes.$inject = [
		'routerHelper'
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
								template: '<widget-default-navbar></widget-default-navbar>'	
							},
							'body': {
								templateUrl: 'app/register/register.form.template.html',
								controller: 'registerFormCtrl',
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