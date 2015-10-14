(function () {
	'use strict';
	
	angular
		.module ('login')
		.directive ('loginForm', LoginForm);
	
	function LoginForm () {
		return {
			restrict: 'E',
			templateUrl: 'app/login/login.form.template.html',
			link: Link
		};
		
		function Link (scope, element, attrs, controllers) {
			element
				.find ('form')
				.form ({
					on: 'blur',
					inline: true,
					fields: {
						email: {
							identifier: 'email',
							rules: [
								{
									type: 'email',
									prompt: 'Please enter a valid e-mail'
								}
							]
						},
						password: {
							identifier: 'password',
							rules: [
								{
									type: 'empty',
									prompt: 'Please enter your password'
								}
							]
						}
					},
					onSuccess: function (event) {
						return false;
					}
				});
		}
	}
}) ();