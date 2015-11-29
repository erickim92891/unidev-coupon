(function () {
	'use strict';
	
	angular
		.module ('redeemedCoupons')
		.directive ('redeemedCouponsFeed', RedeemedCouponsFeed);
	
	function RedeemedCouponsFeed () {
		return {
			restrict: 'E',
			templateUrl: 'app/redeemed_coupons/redeemed-coupons-feed.template.html',
			controller: 'redeemedCouponsFeedCtrl',
			controllerAs: 'vm'
		};
	}
}) ();