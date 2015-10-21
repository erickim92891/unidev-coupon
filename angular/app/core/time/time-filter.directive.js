/**
 * Time filter directive
 * @namespace Directive
 *
 * @memberof Application.Widget.Time
 */
(function () {
	'use strict';
	
	angular
		.module ('time')
		.directive ('timeFilter', TimeFilter);
	
	// Dependencies
	TimeFilter.$inject = [
		'_',
		'$time',
		'$timeConstant'
	];
	
	/**
	 * @function TimeFilter
	 * @return {Object} - Directive parameters
	 * 
	 * @memberof Application.Widget.Time.Directive
	 */
	function TimeFilter (_, $time, $timeConstant)  {
		// Default directive values used in the element attributes
		var defaultValues = {
			align: 'left',
			icon: 'calendar'
		};
		
		return {
			restrict: 'E',
			templateUrl: 'app/time/time-filter.template.html',
			scope: {
				align: '@?',
				icon: '@?',
				color: '@?',
				iconColor: '@?'
			},
			link: Link
		};
		
		/**
		 * @function Link
		 * @desc Assign the default values for the time filter directive
		 */
		function Link ($scope, $element, $attrs) {
			$scope.time = $time;
			$scope.timeConstant = $timeConstant;
			
			if (_.isUndefined ($scope.align)) {
				$scope.align = defaultValues.align;
			}
			
			if (_.isUndefined ($scope.icon)) {
				$scope.icon = defaultValues.icon;
			}
		}
	}
}) ();