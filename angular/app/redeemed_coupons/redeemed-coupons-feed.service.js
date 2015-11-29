/**
 * Redeemed Coupon Feed Service
 * @namespace Factory
 *
 * @memberof Application.Coupon
 */
(function () {
    'use strict';
    
    angular
        .module ('redeemedCoupons')
        .factory ('RedeemedCouponsFeed', Feed);
    
    // Dependencies
    Feed.$inject = [
        '$unidevFirebase',
        '$firebaseArray',
        '_'
    ];
    
    /**
	 * @function Feed
	 * @return {Object} - $firebaseArray object that wraps the redeemed_coupons feed
	 *
	 * @memberof Application.Coupon.Factory
	 */
    function Feed ($unidevFirebase, $firebaseArray, _) {
        // Firebase reference of redeemed_coupons
        var redeemedCouponsRef = $unidevFirebase.child ('redeemed_coupons');
        
        // Extending the $firebaseArray object w/ a set of utility functions
        var RedeemedCouponsArray = $firebaseArray.$extend ({
            // TODO: Add wrapper funcs
            
        });
        
        return RedeemedCouponsFeed;
        
        /**
    	 * @function RedeemedCouponsFeed
    	 * @return {Object} - $firebaseArray reference within the last x redeemed coupons
    	 *
    	 * @memberof Application.Coupon.Factory
    	 */
        function RedeemedCouponsFeed (limit) {
            
            limit = (_.isUndefined (limit) || !_.isNumber (limit)) ? 10 : limit;
            
            return new RedeemedCouponsArray (
                 redeemedCouponsRef
                    .orderByChild ('timeRedeemed')
                    .limitToLast (limit)
            );
        }
    }
}) ();