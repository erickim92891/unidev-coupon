/**
 * Jshint javascript files
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to jshint a set of javascript files.
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');

// Path configuration file.
var paths = require ('../config/paths.js');

// Jshint module
var jshint = require ('gulp-jshint');

// Stylish JSHINT reporter
var stylish = require ('jshint-stylish');

/* END MODULES */

gulp.task ('jshint', JSHint);

/**
 * Function
 * @Name: JSHint
 * @Description: JSHint javascript files
 * @Params:
 *		callback: The callback function used to pipe gulp tasks.
 */
function JSHint (callback) {
	
	return gulp.src (paths.angular + "/**/*.js")
		.pipe (jshint ())
		.pipe(jshint.reporter(stylish));
}
