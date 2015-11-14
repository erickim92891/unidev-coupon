/**
 * Factory for NumberAbbreviate library
 * @namespace Factory
 * @documentation https://github.com/domharrington/js-number-abbreviate
 *          Putting into third party instead of widgets because it was made by
 *          someone else.
 *
 * @memberof Application.Core.ThirdParty
 */
(function () {
	'use strict';
	
	angular
		.module ('core.thirdParty')
		.factory ('NumberAbbreviate', NumAbbrev);
		
	function NumAbbrev () {
	    function NumberAbbreviate(abbrev) {
            if (!(this instanceof NumberAbbreviate)) return new NumberAbbreviate(abbrev);
            this.abbrev = abbrev == null ? ['k', 'm', 'b', 't'] : abbrev;
        }
        
        NumberAbbreviate.prototype._abbreviate = function(number, decPlaces) {
            decPlaces = Math.pow(10, decPlaces);
            
            for (var i = this.abbrev.length - 1; i >= 0; i--) {
            
                var size = Math.pow(10, (i + 1) * 3);
                
                if (size <= number) {
                    number = Math.round(number * decPlaces / size) / decPlaces;
                    
                    if ((number === 1000) && (i < this.abbrev.length - 1)) {
                      number = 1;
                      i++;
                    }
                    
                    number += this.abbrev[i];
                
                    break;
                }
            }
            
            return number;
        };
        
        NumberAbbreviate.prototype.abbreviate = function(number, decPlaces) {
            var isNegative = number < 0;
            var abbreviatedNumber = this._abbreviate(Math.abs(number), decPlaces);
            
            return isNegative ? '-' + abbreviatedNumber : abbreviatedNumber;
        };
        
        return NumberAbbreviate;
	}
    
}) ();