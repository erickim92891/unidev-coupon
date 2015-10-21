/**
 * Main widget module that encapsulates a set of widget modules
 * @namespace Widget
 *
 * @memberof Application
 */
(function () {
	'use strict';
	
	angular
		.module ('app.widgets', [
			'widgets.navbar',
			'widgets.footer',
			'widgets.animations',
			'widgets.dropdown',
			'widgets.form'
		]);
}) ();