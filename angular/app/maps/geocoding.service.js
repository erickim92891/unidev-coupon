(function () {
    'use strict';
    
    angular
        .module ('app.maps')
        .factory ('$geocode', Geocode);
        
    Geocode.$inject = [
        '$q',
        '_',
        '$http'
    ];
    
    function Geocode ($q, _, $http) {
        return {
            search: Search
        };
        
        function Search (address) {
            var queryString = 'https://maps.google.com/maps/api/geocode/json?address=';
            
            if (!_.isUndefined (address) && _.isString (address)) {
                var defer = $q.defer ();
                
                $http.get (queryString + address)
                    .success (function (mapData) {
                        return defer.resolve (mapData);
                    })
                    .error (function (error) {
                        return defer.reject (error);
                    });
                return defer.promise;
            }
            
            return null;
        }
    }
    
}) ();