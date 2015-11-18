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
		'uiGmapGoogleMapApi'
	];
	
	function Dashboard ($time, $timeConstant, RedeemedCoupons, $scope, 
			_, Graph, uiGmapGoogleMapApi) {
		var vm = this;

		// Time Service
		vm.time = $time;
		
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
		vm.coupons = RedeemedCoupons ($timeConstant.TODAY);
		
		// Check for changes in the time
		$scope.$watch (function () {
			return $time.getCurrentTime ();
		// Destroy current list of Redeemed Coupons and re-initialize
		}, function (newTime) {
			vm.coupons.$destroy ();
			vm.coupons = RedeemedCoupons (newTime);
		});
		
		// Look for changes in the Redeemed Coupons
		$scope.$watch (function () {
			return vm.coupons;
		// Re-initialize graphs and alert cards
		}, function () {
			startLoaders ();
			vm.coupons.$loaded (function (redeemedCoupons) {
				// Should ONLY be executed after vm.coupons is completely loaded
				init ();
				vm.redeemedCouponsMap.markers = redeemedCoupons;
				vm.coupons.$watch (function (event) {
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
			vm.alertCards.numRedeemed = vm.coupons.count ();
			vm.alertCards.topCoupon = vm.coupons.topCoupon ();
			vm.alertCards.hotAreas = vm.coupons.hotArea ();
			vm.alertCards.active = false;
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
			
			vm.couponsRedeemedGraph.active = false;
		}
		
		function initTopCouponGraph () {
			var redeemedCoupons = vm.coupons.redeemedCoupons();
			vm.topCouponGraph.setLabels (_.keys (redeemedCoupons));
			vm.topCouponGraph.setData (_.values (redeemedCoupons));
			
			vm.topCouponGraph.active = false;
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