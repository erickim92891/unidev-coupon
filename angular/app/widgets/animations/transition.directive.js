/**
 * Semantic UI transition directive
 * @namespace Directive
 *
 * @memberof Application.Widget.Animations
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets.animations')
		.directive ('animateTransition', AnimateTransition);
	
	// Dependencies
	AnimateTransition.$inject = ['_'];

	/**
	 * @function AnimateTransition
	 * @return {Object} Directive parameters
	 * 
	 * @memberof Application.Widget.Animations.Directive
	 */
	function AnimateTransition (_) {
		return {
			restrict: 'A',
			link: Link,
			scope: {
				animateTransition: '@?'
			}
		};
		
		/**
		 * @function Link
		 * @desc Invoke the Semantic UI transition function on the directive element.
		 *		Also specify default transition values.
		 */
		function Link ($scope, $element, $attrs) {
			// Default transition animateion
			if (_.isUndefined ($scope.animateTransition)) {
				$scope.animateTransition = 'jiggle';
			}
			
			// Semantic UI transition
			$element
				.transition ($scope.animateTransition);
		}
	}
}) ();