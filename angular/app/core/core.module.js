(function () {
	'use strict';
	
	angular
		.module ('core', [
			'core.firebase',
			'core.auth',
			'blocks.exception',
			'blocks.logger',
			'blocks.router'
		]);
}) ();