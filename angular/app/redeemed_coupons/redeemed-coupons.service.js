/**
 * Redeemed Coupon service
 * @namespace Factory
 *
 * @memberof Application.Coupon
 */
(function () {
    'use strict';
    
    angular
        .module ('redeemedCoupons')
        .factory ('RedeemedCoupons', Redeemed);
    
    // Dependencies
    Redeemed.$inject = [
        '$unidevFirebase',
        '$firebaseArray',
        '$time',
        '$timeConstant',
        '_'
    ];
    
    /**
	 * @function Redeemed
	 * @return {Object} - $firebaseArray object that wraps the redeemed_coupons reference
	 *
	 * @memberof Application.Coupon.Factory
	 */
    function Redeemed ($unidevFirebase, $firebaseArray, $time, $timeConstant, _) {
        // Firebase reference of redeemed_coupons
        var redeemedCouponsRef = $unidevFirebase.child ('redeemed_coupons');
        
        // Extending the $firebaseArray object w/ a set of utility functions
        var RedeemedCouponsArray = $firebaseArray.$extend ({
            // Return the total number of redeemed coupons
            count: function () {
                return (this.$list) ? this.$list.length : 0;
            },
            // Get the most redeemed coupon
            topCoupon: function () {
                if (this.$list && this.$list.length) {
                    var couponCounter = this.redeemedCoupons ();
                    
                    return _.max (_.keys (couponCounter), function (i) {
                        return couponCounter[i];
                    });
                }
                return null;
            },
            topCoupons: function (top) {
                if (this.$list && this.$list.length) {
                    top = (_.isUndefined (top) || !_.isNumber (top)) ? this.$list.length : top; 
                    var couponCounter = _.pairs (this.redeemedCoupons ());
                    var topCoupons = couponCounter.sort (function (left, right) {
                        return left[1] - right[1];
                    }).reverse ();
                    
                    return topCoupons.slice (0, top);
                }
                
                return null;
            },
            // Get the area (city, zip) w/ the most redeemed coupons
            hotArea: function () {
                var hotAreas = this.hotAreas ();
                
                if (hotAreas) {
                    return hotAreas[0][0];
                }
                
                return null;
            },
            // Get the top areas (city, zip) w/ the most redeemed coupons
            hotAreas: function (top) {
                if (this.$list && this.$list.length) {
                    top = (_.isUndefined (top) || !_.isNumber (top)) ? this.$list.length : top; 
                    var couponCounter = _.pairs (this.redeemedAreas ());
                    var hotAreas = couponCounter.sort (function (left, right) {
                        return left[1] - right[1];
                    }).reverse ();
                    
                    return hotAreas.slice (0, top);
                }
                
                return null;
            },
            // Get the list of coupons along with its redeemed count
            redeemedCoupons: function () {
                return _.countBy (this.$list, function (redeemed) {
                    return redeemed.coupon;
                });
            },
            // Get the list of areas (city, zip) along with its redeemed count
            redeemedAreas: function () {
                return _.countBy (this.$list, function (redeemed) {
                    return redeemed.address.city + ' ' + redeemed.address.zip;
                });
            },
            // Get a list of coupons grouped by the current time range
            groupByCurrentTime: function () {
                var currentTime = $time.getCurrentTime ();
					
				if (currentTime === $timeConstant.WEEK) {
					return this.groupByDay ();
				}
				else if (currentTime === $timeConstant.MONTH) {
					return this.groupByWeek ();
				}
				else if (currentTime === $timeConstant.YEAR) {
				    return this.groupByMonth ();
				}
				else if (currentTime === $timeConstant.ALL_TIME) {
					return this.groupByYear ();
				}
				return this.groupByHour ();
            },
            // Get a list of coupons grouped by the day (in hours)
            groupByHour: function () {
                var group = [];
                
                for (var i = 0; i < 24; i++) {
                    group.push ([]);
                }
                
                _.each (this.$list, function (redeemedCoupon) {
                    var time = $time.extractHour (redeemedCoupon.timeRedeemed);
                    group[time].push (redeemedCoupon);
                });
                
                return group;
            },
            // Get a list of coupons grouped by the week (in days)
            groupByDay: function () {
                var group = [];
                
                for (var i = 0; i < 7; i++) {
                    group.push ([]);
                }
                
                _.each (this.$list, function (redeemedCoupon) {
                    var time = $time.extractDay (redeemedCoupon.timeRedeemed);
                    group[time].push (redeemedCoupon);
                });
                
                return group;
            },
            // Get a list of coupons grouped by the month (in weeks)
            groupByWeek: function () {
                var group = [];
                
                for (var i = 0; i < 6; i++) {
                    group.push ([]);
                }
                
                _.each (this.$list, function (redeemedCoupon) {
                    var time = $time.extractWeek (redeemedCoupon.timeRedeemed);
                    group[time].push (redeemedCoupon);
                });
                
                return group;
            },
            // Get a list of coupons grouped by the year (in months)
            groupByMonth: function () {
                var group = [];
                
                for (var i = 0; i < 12; i++) {
                    group.push ([]);
                }
                
                _.each (this.$list, function (redeemedCoupon) {
                    var time = $time.extractMonth (redeemedCoupon.timeRedeemed);
                    group[time].push (redeemedCoupon);
                });
                
                return group;
            },
            
            groupByYear: function () {
                var group = [];
                
                _.each (this.$list, function (redeemedCoupon) {
                    var time = $time.extractHour (redeemedCoupon.timeRedeemed);
                    
                    if (_.isUndefined (group[time])) {
                        group[time] = [];
                    }
                    group[time].push (redeemedCoupon);
                });
                
                return group;
            },
        });
        
        return FindRedeemedCoupons;
        
        /**
    	 * @function FindRedeemedCoupons
    	 * @return {Object} - $firebaseArray reference within a time range
    	 *
    	 * @memberof Application.Coupon.Factory
    	 */
        function FindRedeemedCoupons (time) {
            time = time || $time.getCurrentTime ();
            var startOf = $time.startOf (time);
            var endOf = $time.endOf (time);
            
            return new RedeemedCouponsArray (
                 redeemedCouponsRef
                    .orderByChild ('timeRedeemed')
                    .startAt (startOf)    
                    .endAt (endOf)
            );
        }
    }
}) ();