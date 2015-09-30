/**
 * Main application module
 * @namespace Application
 */
(function () {
	'use strict';
	
	angular
		.module ('app', [
			'core',
			'welcome',
			'register',
			'login',
			'dashboard',
			'templates',
			'widgets'
		]);
}) ();