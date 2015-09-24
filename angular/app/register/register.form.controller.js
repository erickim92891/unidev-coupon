(function () {
	'use strict';
	
	angular
		.module ('register')
		.controller ('registerFormCtrl', RegisterForm);
	
	RegisterForm.$inject = [
		'$auth'	
	];
	
	function RegisterForm ($auth) {
		var vm = this;
		var auth = $auth;
		
		vm.credentials = {};
		vm.register = Register;
		
		function Register () {
			console.log ('test');
			var credentials = vm.credentials;
			
			auth.$createUser (credentials)
				.then (function (user) {
					console.log ('User: ' + user.uid + " created successfully!");
					return auth.$authWithPassword (credentials); 
				})
				.then (function (user) {
					console.log ('Logged in as...');
					console.log (user);
				})
				.catch (function (error) {
					console.log( 'error');
				});
		}
	}
}) ();