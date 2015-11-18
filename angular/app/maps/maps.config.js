/**
 * Maps configuration
 * @namespace Config
 *
 * @memberof Application.Maps
 */
(function () {
	'use strict';
	
	angular
		.module ('app.maps')
		.config (MapsConfig);
	
	// Dependencies
	MapsConfig.$inject = [
		'uiGmapGoogleMapApiProvider'
	];
	
	/**
	 * @namespace ApplicationRoutes
	 *
	 * @function AppRoutes
	 * @desc Redirect to the error state if the desired state/route is not defined.
	 * @memberof Application.Route
	 */
    function MapsConfig (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure ({
            // key: 'api_key'
        });
    }
}) ();