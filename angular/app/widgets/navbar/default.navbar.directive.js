(function () {
	'use strict';
	
	angular
		.module ('widgets.navbar')
		.directive ('widgetDefaultNavbar', DefaultNavbar);

	function DefaultNavbar () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/navbar/default.navbar.template.html',
		};
	}
}) ();