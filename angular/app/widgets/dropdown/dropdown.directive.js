/**
 * Semantic UI dropdown directive
 * @namespace Directive
 *
 * @memberof Application.Widget.Dropdown
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.dropdown')
		.directive ('widgetDropdown', Dropdown);

	/**
	 * @function Dropdown
	 * @return {Object} - Directive parameters
	 *
	 * @memberof Application.Widget.Dropdown.Directive
	 */
	function Dropdown () {
		return {
			restrict: 'A',
			link: Link
		};
		
		/**
		 * @function Link
		 * @desc Invoke the Semantic UI dropdown function on the directive element
		 */
		function Link ($scope, $element, $attrs) {
			// Semantic UI dropdown
			$element.dropdown ();
		}
	}
}) ();