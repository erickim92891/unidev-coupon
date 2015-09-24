/* (function () {
	'use strict';
	
	angular
		.module ('register')
		.config (RegisterRoutes);
	
	RegisterRoutes.$inject = [
		'$stateProvider',
		'$urlRouterProvider'
	];
	
	function RegisterRoutes ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state ('register', {
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
				},
				controller: 'registerFormCtrl as vm'
				//template: '<nav-bar></nav-bar>'
				//templateUrl: 'app/home/home.template.html'
			});
	}
}) (); */