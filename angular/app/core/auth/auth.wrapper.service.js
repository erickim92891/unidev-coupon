/**
 * Auth wrapper used to aid Firebase Auth functions
 * @namespace Service
 *
 * @memberof Application.Core.Auth
 */
(function () {
	'use strict';
	
	angular
		.module ('core.auth')
		.factory ('$authWrapper', Auth);
	
	// Dependencies
	Auth.$inject = [
		'$q',
		'$authMessages',
		'$exception',
		'_'
	];
	
	/**
	 * @function Auth
	 * @desc Return an object of useful Firebase Auth functions. Each function should pass in a Firebase Auth object as a parameter.
	 * @return {Object} - Useful Firebase auth functions.
	 * 
	 * @memberof Application.Core.Auth.Service
	 */
	function Auth ($q, $authMessages, $exception, _) {
		return {
			requireAuth: RequireAuth
		};
		
		/**
		 * @function RequireAuth
		 * @desc - A helper function that is used to require an authenticated user
		 * @param {Object} $auth - A firebase auth object
		 * @return {Promise} - User if successful, or a rejected error message.
		 */
		function RequireAuth ($auth) {
			var defer = $q.defer ();
			
			return $auth.$requireAuth ()
				.catch ($exception.catcher ($authMessages.AUTH_LOGIN_REQUIRED));
		}
	}
}) ();