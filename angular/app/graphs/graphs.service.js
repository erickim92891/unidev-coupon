/**
 * Graph service for containing graph data
 * @namespace Factory
 *
 * @memberof Application.Graph
 */
(function () {
    'use strict';
    
    angular
        .module ('app.graphs')
        .factory ('Graph', Graphs);
        
    Graphs.$inject = [
        'RedeemedCoupons',
        '_'
    ];
    
    /**
	 * @function Graphs
	 * @return {Object} - Graph object
	 *
	 * @memberof Application.Graph.Factory
	 */
    function Graphs (RedeemedCoupons, _) {
        
    /**
	 * @Object Graph
	 */
        function Graph () {
            this.data = {
                labels: [],     // Generally the x-axis
                data: [],       // Generally the y-axis
                series: [],     
                name: 'Graph'
            };
        }
     
        /** 
         * SETTERS
         */
        Graph.prototype.setLabels = function (callback) {
            this.set ('labels', callback);
        }
        
        Graph.prototype.setData = function (callback) {
            this.set ('data', callback);
        }
        
        Graph.prototype.setName = function (name) {
            if (_.isString (name)) {
                this.data.name = name;
            }
        }
        
        Graph.prototype.setSeries = function (callback) {
            this.set ('series', callback);
        }
        
        Graph.prototype.set = function (field, callback) {
            if (_.has (this.data, field)) {
                if (_.isFunction (callback)) {
                    this.data[field] = callback ();
                }
                else if (_.isArray (callback)) {
                    this.data[field] = callback;
                }
            }
        }
        
        /**
         * GETTERS
         */
        Graph.prototype.getLabels = function () {
            return this.get ('labels');
        }
        
        Graph.prototype.getData = function () {
            return this.get ('data');
        }
        
        Graph.prototype.getSeries = function () {
            return this.get ('series');
        }
        
        Graph.prototype.getName = function () {
            return this.get ('name');
        }
        
        Graph.prototype.get = function (field) {
            if (_.has (this.data, field)) {
                return this.data[field];
            }
            
            return [];
        }
        
        // Graph object must be instantiated w/ new keyword
        return Graph;
    }
}) ();