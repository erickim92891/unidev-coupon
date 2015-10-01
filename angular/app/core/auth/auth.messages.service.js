/**
 * Auth service that provides constant AUTH error/success messages.
 * @namespace Auth
 *
 * @memberof Application.Core
 */
(function () {
	'use strict';
	
	angular
		.module ('core.auth')
		.factory ('$authMessages', AuthMessages);
	
	/**
	 * @namespace AuthFactory
	 * 
	 * @function AuthMessages
	 * @return {Object} - Object of constant messages.
	 * @memberof Application.Core.Auth
	 */
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