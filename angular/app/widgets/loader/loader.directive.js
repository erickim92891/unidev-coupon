/**
 * Semantic UI loader directive
 * @namespace Loader
 *
 * @memberof Application.Widget.Loader
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.loader')
		.directive ('widgetLoader', Loader);
	
	// Dependencies
	Loader.$inject = ['_'];

	/**
	 * @function AnimateTransition
	 * @return {Object} Directive parameters
	 * 
	 * @memberof Application.Widget.Animations.Directive
	 */
	function Loader (_) {
		return {
			restrict: 'E',
			scope: {
				loaderText: '=',
				loaderInverted: '=',
				loaderActive: '=',
				loaderSize: '='
			},
			templateUrl: 'app/widgets/loader/loader.template.html',
		};
	}
}) ();