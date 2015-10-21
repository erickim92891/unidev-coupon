/**
 * Firebase service that provides a Firebase reference
 * @namespace Factory
 *
 * @memberof Application.Core.Firebase
 */
(function () {
    'use strict';
    
    angular
        .module ('core.firebase')
        .factory ('$unidevFirebase', Unidev);
        
    Unidev.$inject = [
        '$firebaseUrl',
        'Firebase'
    ];    
        
    /**
	 * @function Unidev
	 * @return {Object} - Firebase reference
	 *
	 * @memberof Application.Core.Firebase.Factory
	 */
    function Unidev ($firebaseUrl, Firebase) {
        return new Firebase ($firebaseUrl);
    }
}) ();