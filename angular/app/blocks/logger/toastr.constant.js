/**
 * Create a angular constant for toastr
 * @namespace Blocks
 */
(function () {
	'use strict';
	
	/* global toastr:false */
	angular
		.module ('blocks.logger')
		.constant ('toastr', toastr);
}) ();