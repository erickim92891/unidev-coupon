(function () {
	'use strict';
	
	angular
		.module ('dashboard')
		.controller ('dashboardCtrl', Dashboard);
	
	Dashboard.$inject = [
		'$time',
		'$timeConstant',
		'RedeemedCoupons',
		'$scope',
		'_',
		'$unidevFirebase',
		'Graph',
		'$geocode'
	];
	
	function Dashboard ($time, $timeConstant, RedeemedCoupons, $scope, 
			_, $unidevFirebase, Graph, $geocode) {
		var vm = this;

		vm.time = $time;

		vm.couponsRedeemedGraph = new Graph ();
		vm.topCouponGraph = new Graph ();
		vm.hotAreasGraph = new Graph ();
		
		vm.couponsRedeemedGraph.setName ('Coupons Redeemed');
		vm.topCouponGraph.setName ('Coupon Count');
		vm.hotAreasGraph.setName ('Hot Areas');

		vm.coupons = RedeemedCoupons ($timeConstant.TODAY);
		
		$scope.$watch (function () {
			return $time.getCurrentTime ();
		}, function (newTime) {
			vm.coupons.$destroy ();
			vm.coupons = RedeemedCoupons (newTime);
		});
		
		$scope.$watch (function () {
			return vm.coupons;
		}, function () {
			vm.coupons.$loaded (function (coupons) {
				// Should ONLY be executed after vm.coupons is completely loaded
				init ();
				
				vm.coupons.$watch (function () {
					init ();
				});
			});
		});
		
		function init () {
			initDashboardAlertCards ();
			initCouponsRedeemedGraph ();
			initTopCouponGraph ();
			initHotAreasGraph ();
		}
		
		function initDashboardAlertCards () {
			vm.numRedeemed = vm.coupons.count ();
			vm.topCoupon = vm.coupons.topCoupon ();
			vm.hotAreas = vm.coupons.hotArea ();
		}
		
		function initCouponsRedeemedGraph () {
			vm.couponsRedeemedGraph.setLabels ($time.generateCurrentTimeRange ());
			vm.couponsRedeemedGraph.setData (function () {
				var data = [];
				var groupedData = vm.coupons.groupByCurrentTime ();
				
				_.each (groupedData, function (group) {
					data.push (group.length);
				});

				return [data];
			});
		}
		
		function initTopCouponGraph () {
			var redeemedCoupons = vm.coupons.redeemedCoupons();
			vm.topCouponGraph.setLabels (_.keys (redeemedCoupons));
			vm.topCouponGraph.setData (_.values (redeemedCoupons));
		}
		
		function initHotAreasGraph () {
			var redeemedCoupons = vm.coupons.hotAreas (5);
			var labels = [];
			var data = [];
			
			_.each (redeemedCoupons, function (pair) {
				labels.push (pair[0]);
				data.push (pair[1]);
			});
			
			vm.hotAreasGraph.setLabels (labels);
			vm.hotAreasGraph.setData (data);
		}
	}
	
}) ();