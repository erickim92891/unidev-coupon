/**
 * Watch for file changes and execute some task task.
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to observe file changes in specified directories.
 */

/* MODULES */
var gulp = require ('gulp');
var watch = require ('gulp-watch');
var paths = require ('../config/paths.js');

gulp.task ('watch-public', ['build'], WatchPublic);

function WatchPublic () {
	console.log ('watch test');
	return gulp.src (paths.assets + "/**/*")
		.pipe (watch (paths.assets + "/**/*"))
		.pipe (watch (paths.angular + "/**/*"))
		.pipe (gulp.dest (paths.copiedPublic));
}