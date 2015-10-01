/**
 * Default footer directive
 * @namespace Footer
 *
 * @memberof Application.Widget
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.footer')
		.directive ('widgetDefaultFooter', DefaultFooter);

	/**
	 * @namespace FooterDirective
	 * 
	 * @function DefaultFooter
	 * @return {Object} - Directive parameters
	 * @memberof Application.Widget.Footer
	 */
	function DefaultFooter () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/footer/default.footer.template.html',	
		};
	}
}) ();