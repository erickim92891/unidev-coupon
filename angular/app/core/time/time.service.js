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
		'moment',
		'$rootScope'
	];
	
	/** 
	 * @function TimeFactory
	 * @desc Return a set of useful functions for the Time Module
	 * @return {Object} - Firebase auth object
	 *
	 * @memberof Application.Core.Time.Service
	 */
	function TimeFactory ($timeConstant, _, moment, $rootScope) {
		
		var currTime = $timeConstant.TODAY;
		
		return {
			getCurrentTime: GetCurrentTime,
			setCurrentTime: SetCurrentTime,
			
			generateCurrentTimeRange: GenerateCurrentTimeRange,
			generateDayRange: GenerateDayRange,
			generateWeekRange: GenerateWeekRange,
			generateMonthRange: GenerateMonthRange,
			generateYearRange: GenerateYearRange,
			generateAllRange: GenerateAllRange,
			
			extractHour: ExtractHour,
			extractDay: ExtractDay,
			extractWeek: ExtractWeek,
			extractMonth: ExtractMonth,
			extractYear: ExtractYear,
			
			startOf: StartOf,
			endOf: EndOf
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
				$rootScope.$emit ('time.changed');
			} else {
				console.log (time + ' is not a valid string for SetCurrentTime (time)');
			}
		}
		
		/**
		 * @function GenerateCurrentTimeRange ()
		 * @desc Gets an array of time ranges based on current time
		 * @return {Object} - An array of time ranges
		 */
		function GenerateCurrentTimeRange () {

			if (currTime == $timeConstant.WEEK) {
				return GenerateWeekRange (true);
			}
			
			if (currTime == $timeConstant.MONTH) {
				return GenerateMonthRange ();
			}
			
			if (currTime == $timeConstant.YEAR) {
				return GenerateYearRange (true);
			}
			
			SetCurrentTime ($timeConstant.TODAY);
			return GenerateDayRange ().regular;
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

			_.times (numOfWeeks, function (n) { 
				var week = n + 1;
				weeks.push ('Week ' + week); 
			});
			
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
		
		/**
		 * @function ExtractHour ()
		 * @desc Extracts the hour from a unix timestamp
		 * @return {Number} - Returns the hour of the unix timestamp
		 *					(E.g., [0-23])
		 */
		function ExtractHour (unixTimestamp) {
			if (_.isNumber (unixTimestamp)) {
				return moment (unixTimestamp).format ('H');
			}
			
			return null;
		}
		
		/**
		 * @function ExtractDay ()
		 * @desc Extracts the day from a unix timestamp
		 * @return {Number} - Returns the day of the unix timestamp
		 *					(E.g., [0-6])
		 */
		function ExtractDay (unixTimestamp) {
			if (_.isNumber (unixTimestamp)) {
				return moment (unixTimestamp).format ('d');
			}
			
			return null;
		}
		
		/**
		 * @function ExtractWeek ()
		 * @desc Extracts the week from a unix timestamp
		 * @return {Number} - Returns the week of the unix timestamp
		 *					(E.g., [0-4])
		 */
		function ExtractWeek (unixTimestamp) {
			if (_.isNumber (unixTimestamp)) {
				return Math.floor ((moment (unixTimestamp).format ('D') - 1) / 7);
			}
			
			return null;
		}
		
		/**
		 * @function ExtractMonth ()
		 * @desc Extracts the month from a unix timestamp
		 * @return {Number} - Returns the month of the unix timestamp
		 *					(E.g., [0-11])
		 */
		function ExtractMonth (unixTimestamp) {
			if (_.isNumber (unixTimestamp)) {
				return moment (unixTimestamp).format ('M') - 1;
			}
			
			return null;
		}
		
		/**
		 * @function ExtractYear ()
		 * @desc Extracts the year from a unix timestamp
		 * @return {Number} - Returns the year of the unix timestamp
		 *					(E.g., [1898, 2015, etc...])
		 */
		function ExtractYear (unixTimestamp) {
			if (_.isNumber (unixTimestamp)) {
				return moment (unixTimestamp).format ('YYYY');
			}
			
			return null;
		}
		
		/**
		 * @function StartOf ()
		 * @desc Gets the start date depending on the time passed in
		 * @param {String} time - http://momentjs.com/docs/#/manipulating/start-of/
		 * @return {String} - Unix timestamp
		 */
		function StartOf (time) {
			time = (time === 'today') ? 'day' : time;
			return Number (moment ().startOf (time).format ('x'));
		}
		
		/**
		 * @function EndOf ()
		 * @desc Gets the end date depending on the time passed in
		 * @param {String} time - http://momentjs.com/docs/#/manipulating/end-of/
		 * @return {String} - Unix timestamp
		 */
		function EndOf (time) {
			time = (time === 'today') ? 'day' : time;
			return Number (moment ().endOf (time).format ('x'));
		}
	}
}) ();