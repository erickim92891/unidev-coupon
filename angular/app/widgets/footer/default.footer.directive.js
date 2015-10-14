/**
 * Default footer directive
 * @namespace Directive
 *
 * @memberof Application.Widget.Footer
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.footer')
		.directive ('widgetDefaultFooter', DefaultFooter);

	/**
	 * @function DefaultFooter
	 * @return {Object} - Directive parameters
	 *
	 * @memberof Application.Widget.Footer.Directive
	 */
	function DefaultFooter () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/footer/default.footer.template.html',	
		};
	}
}) ();