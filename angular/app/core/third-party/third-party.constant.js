/**
 * Constants for third party modules
 * @namespace Constant
 *
 * @memberof Application.Core.ThirdParty
 */
(function () {
	'use strict';
	
	/* 
		global _:false 
		global moment:false
		global toastr: false
	*/
	angular
		.module ('core.thirdParty')
		.constant ('_', _)
		.constant ('moment', moment)
		.constant ('toastr', toastr);
}) ();