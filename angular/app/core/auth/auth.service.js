(function () {
	'use strict';
	
	angular
		.module ('core.auth')
		.factory ('$auth', Auth);
	
	Auth.$inject = [
		'$firebaseUrl',
		'$firebaseAuth'
	];
	
	function Auth ($firebaseUrl, $firebaseAuth) {
		var ref = new Firebase ($firebaseUrl);
		return $firebaseAuth (ref);
	}
}) ();