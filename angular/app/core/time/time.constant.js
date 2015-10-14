/**
 * Commonly used time constants
 * @namespace Constant
 *
 * @memberof Application.Core.Time
 */
(function () {
	'use strict';
	
	var constants = {
		ALL_TIME: 'All Time',
		TODAY: 'Today',
		WEEK: 'This Week',
		MONTH: 'This Month',
		YEAR: 'This Year'
	};
	
	angular
		.module ('core.time')
		.constant ('$timeConstant', constants);
}) ();