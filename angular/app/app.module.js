/**
 * Main application module
 * @namespace Application
 */
(function () {
	'use strict';
	
	angular
		.module ('app', [
			'app.core',
			'register',
			'login',
			'logout',
			'dashboard',
			'coupons',
			'redeemedCoupons',
			'templates',
			'app.graphs',
			'app.widgets',
			'app.maps',
			'uiGmapgoogle-maps'
		]);
}) ();