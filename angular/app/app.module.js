/**
 * Main application module
 * @namespace Application
 */
(function () {
	'use strict';
	
	angular
		.module ('app', [
			'app.core',
			'welcome',
			'register',
			'login',
			'logout',
			'dashboard',
			'templates',
			'app.widgets'
		]);
}) ();