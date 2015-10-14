/**
 * Default navbar directive
 * @namespace Directive
 *
 * @memberof Application.Widget.Navbar
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.navbar')
		.directive ('widgetDefaultNavbar', DefaultNavbar);

	/**
	 * @function DefaultNavbar
	 * @return {Object} - Directive parameters
	 *
	 * @memberof Application.Widget.Navbar.Directive
	 */
	function DefaultNavbar () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/navbar/default.navbar.template.html',
		};
	}
}) ();