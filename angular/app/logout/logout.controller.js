(function () {
	'use strict';
	
	angular
		.module ('login')
		.controller ('logoutCtrl', LogoutCtrl);
	
	LogoutCtrl.$inject = [
		'$auth',
		'$authMessages',
		'$logger',
		'$state'
	];
	
	function LogoutCtrl ($auth, $authMessages, $logger, $state) {
		$auth.$unauth ();
		$logger.success ($authMessages.AUTH_LOGOUT_SUCCESS);
		$state.go ('welcome');
	}
}) ();