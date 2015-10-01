/**
 * Default navbar directive
 * @namespace Navbar
 *
 * @memberof Application.Widget
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.navbar')
		.directive ('widgetDefaultNavbar', DefaultNavbar);

	/**
	 * @namespace NavbarDirective
	 *
	 * @function DefaultNavbar
	 * @return {Object} - Directive parameters
	 * @memberof Application.Widget.Navbar
	 */
	function DefaultNavbar () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/navbar/default.navbar.template.html',
		};
	}
}) ();