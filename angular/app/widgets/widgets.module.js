/**
 * Widget module
 * @namespace Widget
 *
 * @memberof Application
 */
(function () {
	'use strict';
	
	angular
		.module ('widgets', [
			'widgets.navbar',
			'widgets.footer'
		]);
}) ();