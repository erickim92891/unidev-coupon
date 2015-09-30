(function () {
	'use strict';
	
	angular
		.module ('dashboard')
		.controller ('dashboardCtrl', Dashboard);
	
	Dashboard.$inject = [
		'$auth',
		'$state',
		'$logger'
	];
	
	function Dashboard ($auth, $state, $logger) {
		var vm = this;
		var auth = $auth;
		
		vm.logout = Logout;
		
		function Logout () {
			auth.$unauth ();
			$state.transitionTo ('welcome');
			
			$logger.success ("You have signed out!");
		}
	}
}) ();