/**
 * Commonly used time constants
 * @namespace Constant
 *
 * @memberof Application.Core.Time
 */
(function () {
	'use strict';
	
	var constants = {
		ALL_TIME: 'all',
		TODAY: 'today',
		WEEK: 'week',
		MONTH: 'month',
		YEAR: 'year'
	};
	
	angular
		.module ('core.time')
		.constant ('$timeConstant', constants);
}) ();