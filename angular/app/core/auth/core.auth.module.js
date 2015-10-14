/**
 * Auth module
 * @namespace Auth
 *
 * @memberof Application.Core
 */
(function () {
	'use strict';
	
	angular
		.module ('core.auth', [
			'core.firebase',
			'firebase'
		]);
}) ();