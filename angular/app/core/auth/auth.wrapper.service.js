(function () {
	'use strict';
	
	angular
		.module ('core.auth')
		.factory ('$authWrapper', Auth);
	
	Auth.$inject = [
		'$q',
		'$authMessages',
		'$exception'
	];
	
	function Auth ($q, $authMessages, $exception) {
		return {
			requireAuth: RequireAuth
		};
		
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