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
			link: Link,
			scope: {
				loaderText: '=',
				loaderInverted: '=',
				loaderActive: '=',
				loaderSize: '='
			},
			templateUrl: 'app/widgets/loader/loader.template.html',
		};
		
		/**
		 * @function Link
		 * @desc Apply Semantic UI loader properties to the directive
		 *		Also specify default transition values.
		 */
		function Link ($scope, $element, $attrs) {
			
			console.log ($scope.loaderText);
			
			ApplyInverted ();
			ApplyState ();
			ApplySize ();
			
			// Apply the inverted property if set via loader-inverted
			function ApplyInverted () {
				if ($scope.loaderInverted) {
					$element
						.find ('.dimmer')
						.addClass ('inverted');
				}
				else {
					$element
						.find ('.dimmer')
						.removeClass ('inverted');
				}
			}
			
			// Apply the active/disabled state if set via loader-active
			function ApplyState () {
				if ($scope.loaderActive) {
					$element
						.find ('.dimmer')
						.addClass ('active')
						.removeClass ('disabled');
				}
				else {
					$element
						$element
						.find ('.dimmer')
						.addClass ('disabled')
						.removeClass ('active');
				}
			}
			
			// Apply the size if set via loader-active
			function ApplySize () {
				if ($scope.loaderSize) {
					$element
						.find ('.loader')
						.removeClass ('small large')
						.addClass ($scope.loaderSize);
				}
			}
		}
	}
}) ();