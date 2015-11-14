(function () {
	'use strict';
	
	angular
		.module ('login')
		.controller ('logoutCtrl', LogoutCtrl);
	
	LogoutCtrl.$inject = [
		'$unidevAuth',
		'$authMessages',
		'$logger',
		'$state'
	];
	
	function LogoutCtrl ($unidevAuth, $authMessages, $logger, $state) {
		$unidevAuth.$unauth ();
		$logger.success ($authMessages.AUTH_LOGOUT_SUCCESS);
		$state.go ('login');
	}
}) ();