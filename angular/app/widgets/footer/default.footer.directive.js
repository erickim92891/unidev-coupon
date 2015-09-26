(function () {
	'use strict';
	
	angular
		.module ('widgets.footer')
		.directive ('widgetDefaultFooter', DefaultFooter);

	function DefaultFooter () {
		return {
			restrict: 'E',
			templateUrl: 'app/widgets/footer/default.footer.template.html',	
		};
	}
}) ();