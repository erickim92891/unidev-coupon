/**
 * Auth wrapper used to aid Firebase Auth functions
 * @namespace Auth
 *
 * @memberof Application.Core
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
		'$exception'
	];
	
	/**
	 * @namespace AuthFactory
	 * 
	 * @function Auth
	 * @desc Return an object of useful Firebase Auth functions. Each function should pass in a Firebase Auth object as a parameter.
	 * @return {Object} - Useful Firebase auth functions.
	 * @memberof Application.Core.Auth
	 */
	function Auth ($q, $authMessages, $exception) {
		return {
			requireAuth: RequireAuth
		};
		
		/**
		 * @function RequireAuth
		 * @desc - A helper function that is used to require an authenticated user
		 * @param {Object} $auth - A firebase auth object
		 * @return {Promise} - User if successful, or a rejected error message.
		 * @memberof Application.Core.Auth.AuthFactory
		 */
		function RequireAuth ($auth) {
			var defer = $q.defer ();
			
			$auth.$requireAuth ()
				.then (function (user) {
					defer.resolve (user);
				})
				.catch ($exception.catcher ($authMessages.AUTH_LOGIN_REQUIRED))
				.catch (function (error) {
					defer.reject (error);
				});
			
			return defer.promise;
		}
	}
}) ();