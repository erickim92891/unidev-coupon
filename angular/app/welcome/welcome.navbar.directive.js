(function () {
	'use strict';
	
	angular
		.module ('welcome')
		.directive ('welcomeNavbar', NavigationBar);
	
	NavigationBar.$inject = ['$timeout'];
	
	function NavigationBar ($timeout) {
		var directive = {
			restrict: 'A',
			link: Link
		};
		
		return directive;
		
		function Link (scope, element, attr) {
			$timeout (function () {
					var right = jQuery ('#welcome-navbar .right');
					
					jQuery('.masthead')
					.visibility ({
						once: false,
						onBottomPassed: function () {
							jQuery ('.button', right).removeClass ('inverted');
							jQuery ('.button', right)
								.transition ('set looping')
								.transition ('pulse', '3000ms');
							
							jQuery ('.register-btn', right).addClass ('primary');
						},
						onBottomPassedReverse: function () {
							jQuery ('.button', right).addClass ('inverted');
							jQuery ('.button', right).transition ('remove looping');
	
							jQuery ('.register-btn', right).removeClass ('primary');
						}
					});
			});
		}
	}
}) ();