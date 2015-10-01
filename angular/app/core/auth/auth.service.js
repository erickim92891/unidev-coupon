/**
 * Auth service that generates a Firebase Auth object
 * @namespace Auth
 *
 * @memberof Application.Core
 */
(function () {
	'use strict';
	
	angular
		.module ('core.auth')
		.factory ('$auth', Auth);
	
	// Dependencies
	Auth.$inject = [
		'$firebaseUrl',
		'$firebaseAuth'
	];
	
	/** 
	 * @namespace AuthFactory
	 *
	 * @function Auth
	 * @desc Return a firebase auth object
	 * @memberof Application.Core.Auth
	 * @return {Object} - Firebase auth object
	 */
	function Auth ($firebaseUrl, $firebaseAuth) {
		var ref = new Firebase ($firebaseUrl);
		return $firebaseAuth (ref);
	}
}) ();