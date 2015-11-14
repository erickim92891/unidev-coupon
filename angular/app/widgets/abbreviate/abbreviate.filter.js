/**
 * Abbreviate filter
 * @namespace Filter
 *
 * @memberof Application.Widget.Abbreviate
 */
(function () {
    
    angular
        .module ('widgets.abbreviate')
        .filter ('abbreviate', Abbreviate);
    
    // Dependencies
    Abbreviate.$inject = [
        'NumberAbbreviate',
        '_'
    ];
    
    /**
	 * @function Abbreviate
	 * @return {Object} Filter transformation. Could be text, numbers, etc...
	 * 
	 * @memberof Application.Widget.Abbreviate.Filter
	 */
    function Abbreviate (NumberAbbreviate, _) {
        return function (value, option) {
            // Abbreviate number
            if (_.isNumber (value)) {
                
                // Default decimal point is 1
                option = (_.isNumber (option)) ? option : 1;
                return NumberAbbreviate ().abbreviate (value, option);
            }
            else if (_.isString (value)) {
                
            }
            return null;
        }
    }
}) ();
