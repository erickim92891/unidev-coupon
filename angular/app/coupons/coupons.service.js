/**
 * Coupons service for returning back all coupon objects
 * @namespace Factory
 *
 * @memberof Application.Coupon
 */
(function () {
    'use strict';
    
    angular
        .module ('coupons')
        .factory ('Coupons', Coupons);
    
    // Dependencies
    Coupons.$inject = [
        '$unidevFirebase',
        '$firebaseObject',
        '$time'
    ];
    
    /**
	 * @function Coupons
	 * @return {Object} - Set of functions using the Coupons Firebase Reference
	 *
	 * @memberof Application.Coupon.Factory
	 */
    function Coupons ($unidevFirebase, $firebaseObject, Firebase, $time, $timeConstant) {
        return {
            getCouponsRef: GetCouponsRef,
            findCoupons: FindCoupons
        }
        
        // Returns a Coupon Firebase reference
        function GetCouponsRef () {
            return $unidevFirebase.child ('coupons');
        }
        
        // Returns a $firebaseArray wrapper around the Coupon Firebase reference
        function FindCoupons (ref) {
            var coupons = GetCouponsRef ();
            
            if (ref) {
                coupons = coupons.child (ref);
            }
            
            return $firebaseObject (coupons); 
        }
    }
}) ();