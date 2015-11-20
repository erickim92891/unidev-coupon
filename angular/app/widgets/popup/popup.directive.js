/**
 * Semantic UI popup directive
 * @namespace Directive
 *
 * @memberof Application.Widget.Popup
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.popup')
		.directive ('widgetPopup', Popup);

	/**
	 * @function Dropdown
	 * @return {Object} - Directive parameters
	 *
	 * @memberof Application.Widget.Dropdown.Directive
	 */
	function Popup () {
		return {
			restrict: 'A',
			link: Link
		};
		
		/**
		 * @function Link
		 * @desc Invoke the Semantic UI dropdown function on the directive element
		 */
		function Link ($scope, $element, $attrs) {
		    console.log ($attrs);
			// Semantic UI dropdown
			$element.popup ($attrs);
		}
	}
}) ();