/**
 * Helper module for chalk.
 */

/* MODULES */

// Terminal string styling.
var chalk = require ('chalk');

// Javascript utility library.
var _ = require ('lodash');

module.exports = {
	header: Header,
	list: List
};

/* END MODULES */

/**
 * Function
 * @Name: Header
 * @Description: chalk format for headers.
 * @Params:
 *		text: Header text to be formatted. Default = green.
 */
function Header (text, color) {
	color = (color !== undefined) ? color : 'green';
	console.log (chalk[color].inverse.underline.bold ("\n" + text + "\n"));
}

/**
 * Function
 * @Name: List
 * @Description: List items with chalk format
 * @Params:
 *		list: Items to be listed + chalked.
 *		color: Color to be used. Default = blue.
 */
function List (list, color) {
	color = (color !== undefined) ? color : 'blue';
	
	var counter = 1;	
	_.forEach (list, function (item) {
		console.log (chalk[color] (counter + '. ' + item));
		counter++;
	});
	
	console.log ("\n");
}