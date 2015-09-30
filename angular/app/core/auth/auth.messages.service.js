(function () {
	'use strict';
	
	angular
		.module ('core.auth')
		.factory ('$authMessages', AuthMessages);
	
	function AuthMessages () {
		return {
			AUTH_LOGIN_REQUIRED: 'You must first be logged in to perform this action!',
			AUTH_LOGIN_SUCCESS: 'You have successfully logged in!',
			AUTH_LOGIN_FAILED: 'Failed to login!',
			AUTH_REGISTER_SUCCESS: 'You have successfully registered an account!',
			AUTH_REGISTER_FAILED: 'Failed to register!'
		};
	}
}) ();