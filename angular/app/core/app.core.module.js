/**
 * Core module
 * @namespace Core
 *
 * @memberof Application
 */
(function () {
	'use strict';
	
	angular
		.module ('app.core', [
			'core.firebase',
			'core.auth',
			'core.error',
			'core.thirdParty',
			'core.blocks'
		]);
}) ();