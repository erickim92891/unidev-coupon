(function () {
	'use strict';
	
	angular
		.module ('dashboard')
		.directive ('dashboardAlertCards', AlertCards);
	
	function AlertCards () {
		return {
			restrict: 'E',
			templateUrl: 'app/dashboard/dashboard.alert-cards.template.html'
		};
	}
}) ();