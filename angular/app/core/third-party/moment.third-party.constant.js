/**
 * Constants for moment library
 * @namespace Constant
 *
 * @memberof Application.Core.ThirdParty
 */
(function () {
	'use strict';
	
	/* 
		global moment:false 
	*/
	angular
		.module ('core.thirdParty')
		.constant ('moment', moment);
}) ();