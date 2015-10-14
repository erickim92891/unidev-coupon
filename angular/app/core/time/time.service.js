/**
 * Service functions for the Time module
 * @namespace Service
 *
 * @memberof Application.Core.Time
 */
(function () {
	'use strict';
	
	angular
		.module ('core.time')
		.factory ('$time', TimeFactory);
	
	TimeFactory.$inject = [
		'$timeConstant', 
		'_',
		'moment'
	];
	
	/** 
	 * @function TimeFactory
	 * @desc Return a set of useful functions for the Time Module
	 * @return {Object} - Firebase auth object
	 *
	 * @memberof Application.Core.Time.Service
	 */
	function TimeFactory ($timeConstant, _, moment) {
		
		var currTime = $timeConstant.TODAY;
		
		return {
			getCurrentTime: GetCurrentTime,
			setCurrentTime: SetCurrentTime,
			generateDayRange: GenerateDayRange,
			generateWeekRange: GenerateWeekRange,
			generateMonthRange: GenerateMonthRange,
			generateYearRange: GenerateYearRange,
			generateAllRange: GenerateAllRange
		};	
		
		/** 
		 * @function GetCurrentTime
		 * @desc Return the current time in string format.
		 * @return {String} - The current time. Look at $timeConstant for valid time strings.
		 */
		function GetCurrentTime () {
			return currTime;
		}
		
		/** 
		 * @function SetCurrentTime
		 * @desc Sets the current time in string format.
		 * @param {String} time - The time you wish to set. Look at $timeConstant for valid time strings.
		 */
		function SetCurrentTime (time) {
			if (_.isString (time)) {
				currTime = time;
			} else {
				console.log (time + ' is not a valid string for SetCurrentTime (time)');
			}
		}
		
		/**
		 * @function GenerateDayRange ()
		 * @desc Gets an array of hour ranges for a day
		 * @param {Integer} hourOffset - Specify the hour offset to increment by.
		 * @return {Object} - An object with both military and normal hour ranges in a day.
		 */
		function GenerateDayRange (hourOffset) {
			if (_.isUndefined (hourOffset)) hourOffset = 1;
			
			if (24 % hourOffset === 0 && hourOffset <= 6 && hourOffset > 0) {
				var startTime = 0;
				var times = {
					regular: [],
					military: []
				};
				
				while (startTime < 24) {
					var minFormattedTime = formatTime (startTime, false);
					var regularRange = minFormattedTime.regular;
					var militaryRange = minFormattedTime.military;
					
					startTime += hourOffset;
					var maxFormattedTime = formatTime (startTime);
					
					times.regular.push (regularRange + '-' + maxFormattedTime.regular);
					times.military.push (militaryRange + '-' + maxFormattedTime.military);
				}
				
				return times;
			} else {
				console.log ('Argument must divide evenly into 24, be greater than zero, and be less than or equal to 6.');
			}
			
			return false;
		
			function formatTime (time, meridiem) {
				if (_.isUndefined (meridiem)) meridiem = true;
				var formattedTime = moment (time.toString (), 'hh');
					
				return {
					regular: (meridiem) ? formattedTime.format ('h a') : formattedTime.format ('h'),
					military: formattedTime.format ('H:mm')
				};
			} 
		}
		
		/**
		 * @function GenerateWeekRange ()
		 * @desc Gets an array of day ranges for th eweek
		 * @param {Boolean} short - True if you want the days to be shortened (E.g., Mon, Tue, Wed...)
		 * @return {Array} - An array of day names (E.g., [Monday, Tuesday, etc...])
		 */
		function GenerateWeekRange (short) {
			if (_.isUndefined (short) || !_.isBoolean (short)) {
				short = false;
			}
			
			return (short) ? moment.weekdaysShort () : moment.weekdays ();
		}
		
		/**
		 * @function GenerateMonthRange ()
		 * @desc Gets an array of the number of weeks in the current month
		 * @return {Array} - Array of week numbers for the current month
		 *					(E.g., [1 week, 2 week, 3 week, etc...])
		 */
		function GenerateMonthRange () {
			var weeks = [];
			var numOfWeeks = Math.round (moment ().daysInMonth () / 7);
			_(numOfWeeks).times (function(n){ weeks.push (n + 1 + ' week'); });
			
			return weeks;
		}
		
		/**
		 * @function GenerateYearRange ()
		 * @desc Gets an array of months in a year
		 * @param {Boolean} short - True if you want the months to be shortened (E.g., Jan, Feb, Mar...)
		 * @return {Array} - Array of month names (E.g., [January, February, etc...])
		 */
		function GenerateYearRange (short) {
			if (_.isUndefined (short) || !_.isBoolean (short)) {
				short = false;
			}
			
			return (short) ? moment.monthsShort () : moment.months ();
		}
		
		/**
		 * @function GenerateAllRange ()
		 * @desc Gets an array of years since the user subscribed
		 * @return {Array} - An array of year numbers for the length of the user subscription
		 *					(E.g., [1 yr, 2 yr, 3 yr, etc...])
		 */
		function GenerateAllRange () {
			return [1];
		}
	}
}) ();