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
		'Graph',
		'uiGmapGoogleMapApi',
		'Coupons'
	];
	
	function Dashboard ($time, $timeConstant, RedeemedCoupons, $scope, 
			_, Graph, uiGmapGoogleMapApi, Coupons) {
		var vm = this;

		// Time Service
		vm.time = $time;
		vm.coupons = Coupons;
		
		// Map data
		vm.redeemedCouponsMap = {
			position: {
				center: {
					latitude: 33.802129,
					longitude: -117.998491
				},
				defaultCenter: {
					latitude: 33.802129,
					longitude: -117.998491
				}
			},
			control: {
				
			},
			zoom: 14,
			options: {
				scrollwheel: false, 
				mapTypeControl: false
			},
			markers: [],
			windows: "show",
			refresh: function () {
				this.zoom = 14;
				this.control.refresh (
					this.position.defaultCenter
				);
			}
		};

		// Graphs
		vm.couponsRedeemedGraph = new Graph ();
		vm.topCouponGraph = new Graph ();
		vm.hotAreasGraph = new Graph ();
		// Initialize Graph names
		vm.couponsRedeemedGraph.setName ('Coupons Redeemed');
		vm.topCouponGraph.setName ('Coupon Count');
		vm.hotAreasGraph.setName ('Hot Areas');
		
		// Alert Cards
		vm.alertCards = {};
		
		// Redeemed Coupons
		vm.redeemedCoupons = RedeemedCoupons ($timeConstant.TODAY);
		
		// Check for changes in the time
		$scope.$watch (function () {
			return $time.getCurrentTime ();
		// Destroy current list of Redeemed Coupons and re-initialize
		}, function (newTime) {
			vm.redeemedCoupons.$destroy ();
			vm.redeemedCoupons = RedeemedCoupons (newTime);
		});
		
		// Look for changes in the Redeemed Coupons
		$scope.$watch (function () {
			return vm.redeemedCoupons;
		// Re-initialize graphs and alert cards
		}, function () {
			startLoaders ();
			vm.redeemedCoupons.$loaded (function (redeemedCoupons) {
				// Should ONLY be executed after vm.coupons is completely loaded
				init ();
				vm.redeemedCouponsMap.markers = redeemedCoupons;
				vm.redeemedCoupons.$watch (function (event) {
					init ();
				});
			});
		});
		
		// Initialize dashboard data
		function init () {
			initDashboardAlertCards ();
			initCouponsRedeemedGraph ();
			initTopCouponGraph ();
			initHotAreasGraph ();
		}
		
		// Initialize dashboard data for alert cards
		function initDashboardAlertCards () {
			vm.alertCards.numRedeemed = vm.redeemedCoupons.count ();
			vm.alertCards.topCoupon = vm.redeemedCoupons.topCoupon ();
			vm.alertCards.topCouponDescription = Coupons.findCoupons (vm.alertCards.topCoupon);
			
			var hotArea = vm.redeemedCoupons.hotArea ().split (' ');
			vm.alertCards.hotArea = {
				city: hotArea[0],
				zip: hotArea[1]
			};
			
			vm.alertCards.active = false;
		}
		
		// Initialize CouponsRedeemedGraph object
		function initCouponsRedeemedGraph () {
			vm.couponsRedeemedGraph.setLabels ($time.generateCurrentTimeRange ());
			vm.couponsRedeemedGraph.setData (function () {
				var data = [];
				var groupedData = vm.redeemedCoupons.groupByCurrentTime ();
				
				_.each (groupedData, function (group) {
					data.push (group.length);
				});

				return [data];
			});
			
			vm.couponsRedeemedGraph.active = false;
		}
		
		// Initialize TopCouponGraph object
		function initTopCouponGraph () {
			var redeemedCoupons = vm.redeemedCoupons.topCoupons (5);
			var labels = [];
			var data = [];
			
			_.each (redeemedCoupons, function (pair) {
				labels.push (pair[0]);
				data.push (pair[1]);
			});
			
			vm.topCouponGraph.setLabels (labels);
			vm.topCouponGraph.setData (data);
			
			vm.topCouponGraph.active = false;
		}
		
		// Initialize HotAreaGraph object
		function initHotAreasGraph () {
			var redeemedCoupons = vm.redeemedCoupons.hotAreas (5);
			var labels = [];
			var data = [];
			
			_.each (redeemedCoupons, function (pair) {
				labels.push (pair[0]);
				data.push (pair[1]);
			});
			
			vm.hotAreasGraph.setLabels (labels);
			vm.hotAreasGraph.setData (data);
			
			vm.hotAreasGraph.active = false;
		}
		
		function startLoaders () {
			vm.couponsRedeemedGraph.active = true;
			vm.topCouponGraph.active = true;
			vm.hotAreasGraph.active = true;
			vm.alertCards.active = true;
		}
	}
}) ();