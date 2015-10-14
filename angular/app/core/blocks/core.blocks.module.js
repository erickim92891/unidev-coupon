/**
 * Block modules
 * @namespace Blocks
 *
 * @memberof Application.Core
 */
(function () {
	'use strict';
	
	angular
		.module ('core.blocks', [
			'blocks.exception',
			'blocks.logger',
			'blocks.router'
		]);
}) ();