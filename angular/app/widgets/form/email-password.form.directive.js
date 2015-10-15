(function () {
	'use strict';
	
	angular
		.module ('widgets.form')
		.directive ('widgetEmailPasswordForm', EmailPasswordForm);
	
	function EmailPasswordForm () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/form/email-password.form.template.html',
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