(function () {
	'use strict';
	
	angular
		.module ('login')
		.controller ('loginFormCtrl', LoginForm);
	
	LoginForm.$inject = [
		'$auth'
	];
	
	function LoginForm ($auth) {
		var vm = this;
		var auth = $auth;
		
		vm.credentials = {};
		vm.login = Login;
		
		function Login () {
			auth.$authWithPassword (vm.credentials)
				.then (function (user) {
					console.log ("Success Login: ");
					console.log (user);
				})
				.catch (function (error) {
					console.log(error);
				});
		}
	}
}) ();