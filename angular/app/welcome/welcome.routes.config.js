/* (function () {
	'use strict';
	
	angular
		.module ('welcome')
		.config (WelcomeConfig);
	
	WelcomeConfig.$inject = [
		'$stateProvider',
		'$urlRouterProvider'
	];
	
	function WelcomeConfig ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state ('welcome', {
				url: '',
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
				//template: '<nav-bar></nav-bar>'
				//templateUrl: 'app/home/home.template.html'
			});
	}
}) (); */