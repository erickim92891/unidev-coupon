(function () {
    'use strict';
    
    angular
        .module ('redeemedCoupons')
        .controller ('redeemedCouponsFeedCtrl', FeedCtrl);
        
    FeedCtrl.$inject = [
        '$scope',
        'RedeemedCouponsFeed',
        'Coupons',
        'moment',
        '_'
    ];
    
    function FeedCtrl ($scope, RedeemedCouponsFeed, Coupons, moment, _) {
        var limit = 10;
        var  vm = this;
        
        vm.redeemedCoupons = RedeemedCouponsFeed (limit);
        vm.coupons = Coupons.findCoupons ();
        
        vm.findCouponDescription = FindCouponDescription;
        vm.findTimeRedeemed = FindTimeRedeemed;
        vm.findTimeRedeemedFromNow = FindTimeRedeemedFromNow;
        vm.findAddress = FindAddress;
        vm.findCounter = FindCounter;
        
        function FindCouponDescription (couponId) {

            return (_.isUndefined (vm.coupons[couponId])) ? 'n/a' : vm.coupons[couponId].description;
        }
        
        function FindTimeRedeemedFromNow (timeRedeemed) {
            return moment (timeRedeemed).fromNow ();
        }
        
        function FindTimeRedeemed (timeRedeemed) {
            return moment (timeRedeemed).format ('YYYY-MM-DD h:mm a');
        }
        
        function FindAddress (address) {
            return address.street_num + ' ' + address.street + ' ' +
                address.city + ', ' + address.state + ', ' + address.zip;
        }
        
        function FindCounter (couponId) {
            return (_.isUndefined (vm.coupons[couponId])) ? 0 : vm.coupons[couponId].counter;
        }
    }
}) ();