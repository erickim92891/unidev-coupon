/* (function () {
	'use strict';
	
	angular
		.module ('login')
		.config (LoginRoutes);
	
	LoginRoutes.$inject = [
		'$stateProvider',
		'$urlRouterProvider'
	];
	
	function LoginRoutes ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state ('login', {
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
				},
				controller: 'loginFormCtrl as vm'
				//template: '<nav-bar></nav-bar>'
				//templateUrl: 'app/home/home.template.html'
			});
	}
}) (); */