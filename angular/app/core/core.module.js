(function () {
	'use strict';
	
	angular
		.module ('core', [
			'core.firebase',
			'core.auth',
			'core.error',
			'blocks.exception',
			'blocks.logger',
			'blocks.router'
		]);
}) ();