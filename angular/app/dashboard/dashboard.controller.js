(function () {
	'use strict';
	
	angular
		.module ('dashboard')
		.controller ('dashboardCtrl', Dashboard);
	
	Dashboard.$inject = [
		'$time'
	];
	
	function Dashboard ($time) {
		var vm = this;
		
		vm.time = 'Today';
		vm.couponsRedeemed = 40503;
		vm.topCoupon = 'BOGO';
		vm.hotAreas = 'Anaheim, 92801';
	
		vm.series = ['Series A', 'Series B'];
		vm.labels = $time.generateWeekRange ();
		vm.data = [
			[65, 59, 80, 81, 56, 55, 65],
			[28, 48, 40, 19, 86, 27, 72]
		];
		
		vm.data1 = [65, 59, 80, 81, 56, 55, 40];
		
		
	}
}) ();