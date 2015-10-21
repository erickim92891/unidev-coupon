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
		.factory ('$unidevAuth', Auth);
	
	// Dependencies
	Auth.$inject = [
		'$unidevFirebase',
		'$firebaseAuth'
	];
	
	/** 
	 * @function Auth
	 * @desc Return a firebase auth object
	 * @return {Object} - Firebase auth object
	 *
	 * @memberof Application.Core.Auth.Service
	 */
	function Auth ($unidevFirebase, $firebaseAuth) {
		return $firebaseAuth ($unidevFirebase);
	}
}) ();