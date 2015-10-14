/**
 * Auth service that generates a Firebase Auth object
 * @namespace Service
 *
 * @memberof Application.Core.Auth
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
	 * @function Auth
	 * @desc Return a firebase auth object
	 * @return {Object} - Firebase auth object
	 *
	 * @memberof Application.Core.Auth.Service
	 */
	function Auth ($firebaseUrl, $firebaseAuth) {
		var ref = new Firebase ($firebaseUrl);
		return $firebaseAuth (ref);
	}
}) ();