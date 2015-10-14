(function () {
	'use strict';
	
	angular
		.module ('login')
		.controller ('loginFormCtrl', LoginForm);
	
	LoginForm.$inject = [
		'$auth',
		'$state',
		'$logger',
		'$authMessages',
		'$exception'
	];
	
	function LoginForm ($auth, $state, $logger, $authMessages, $exception) {
		var vm = this;
		var auth = $auth;
		
		vm.credentials = {
			email: '',
			password: ''
		};
		vm.login = Login;
		
		function Login () {
			
			auth.$authWithPassword (vm.credentials)
				.then (function (user) {
					$logger.success ($authMessages.AUTH_LOGIN_SUCCESS);
					$state.transitionTo ('dashboard');
				})
				.catch ($exception.catcher ($authMessages.AUTH_LOGIN_FAILED));
		}
	}
}) ();