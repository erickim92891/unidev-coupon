/**
 * User navbar directive
 * @namespace Directive
 *
 * @memberof Application.Widget.Navbar
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.navbar')
		.directive ('widgetUserNavbar', UserNavbar);

	/**
	 * @function UserNavbar
	 * @return {Object} - Directive parameters
	 *
	 * @memberof Application.Widget.Navbar.Directive
	 */
	function UserNavbar () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/navbar/user.navbar.template.html',
		};
	}
}) ();