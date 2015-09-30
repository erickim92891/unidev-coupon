(function () {
	'use strict';
	
	angular
		.module ('register')
		.controller ('registerFormCtrl', RegisterForm);
	
	RegisterForm.$inject = [
		'$auth',
		'$state',
		'$logger',
		'$authMessages',
		'$exception'
	];
	
	function RegisterForm ($auth, $state, $logger, $authMessages, $exception) {
		var vm = this;
		var auth = $auth;
		
		vm.credentials = {};
		vm.register = Register;
		
		function Register () {
			
			var errorMsg = $authMessages.AUTH_REGISTER_FAILED;
			
			auth.$createUser (vm.credentials)
				.then (function (user) {
					errorMsg = $authMessages.AUTH_LOGIN_FAILED;
					$logger.success ($authMessages.AUTH_REGISTER_SUCCESS);
				
					return auth.$authWithPassword (vm.credentials); 
				})
				.then (function (user) {
					$state.transitionTo ('dashboard');
				})
				.catch ($exception.catcher (errorMsg));
		}
	}
}) ();