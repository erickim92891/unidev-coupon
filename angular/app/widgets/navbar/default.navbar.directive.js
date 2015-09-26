(function () {
	'use strict';
	
	angular
		.module ('widgets.navbar')
		.directive ('widgetDefaultNavbar', DefaultNavbar);

	function DefaultNavbar () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/navbar/default.navbar.template.html',
			link: Link
		};
		
		function Link ($scope, $element, $attr) {
			$ ('#widget-default-navbar-sidebar')
				.sidebar ('attach events', '#widget-default-navbar .toc.item');
		}
	}
}) ();