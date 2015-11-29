(function () {
    'use strict';
    
    angular
        .module ('redeemedCoupons')
        .controller ('redeemedCouponsFeedCtrl', FeedCtrl);
        
    FeedCtrl.$inject = [
        '$scope',
        'RedeemedCouponsFeed',
        'Coupons',
        'moment'
    ];
    
    function FeedCtrl ($scope, RedeemedCouponsFeed, Coupons, moment) {
        var limit = 10;
        var  vm = this;
        
        vm.redeemedCoupons = RedeemedCouponsFeed (limit);
        vm.coupons = Coupons.findCoupons ();
        
        vm.redeemedCoupons.$loaded (function (coupons) {
            console.log (coupons);
        });
        
        vm.findCouponDescription = FindCouponDescription;
        vm.findTimeRedeemed = FindTimeRedeemed;
        vm.findAddress = FindAddress;
        
        function FindCouponDescription (couponId) {
            return vm.coupons[couponId].description;
        }
        
        function FindTimeRedeemed (timeRedeemed) {
            return moment (timeRedeemed).fromNow ();
        }
        
        function FindAddress (address) {
            return address.street_num + ' ' + address.street + ' ' +
                address.city + ', ' + address.state + ', ' + address.zip;
        }
    }
}) ();