/**
 * Semantic UI sticky directive
 * @namespace Directive
 *
 * @memberof Application.Widget.Sticky
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.sticky')
		.directive ('widgetSticky', Sticky);

	/**
	 * @function Sticky
	 * @return {Object} - Directive parameters
	 *
	 * @memberof Application.Widget.Dropdown.Directive
	 */
	function Sticky () {
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
			$element.sticky ($attrs);
		}
	}
}) ();