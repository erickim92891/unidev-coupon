/**
 * Concatenate + Minify + Uglify
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to auto concatenate and uglify javascript + css files
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');


// Globals configuration file.
var paths = require ('../config/paths.js');

var pipeline = require ('../config/pipeline.js');

var concat = require ('gulp-concat');
var uglify = require ('gulp-uglify');
var minify = require ('gulp-minify-css');

var dist = './' + paths.copiedPublic;

gulp.task ('concatify', [
	'concatify-scripts',
	'concatify-angular',
	'concatify-styles'
]);

gulp.task ('concatify-scripts', ['copy-assets', 'angular-templatecache'], ConcatifyScripts);
gulp.task ('concatify-angular', ['copy-assets'], ConcatifyAngular);
gulp.task ('concatify-styles', ['copy-assets'], ConcatifyStyles);

function ConcatifyScripts (callback) {
	return gulp.src (pipeline.publicScripts ())
		.pipe (concat (paths.concatifiedScripts))
		.pipe (uglify ())
		.pipe (gulp.dest (dist));
}

function ConcatifyAngular (callback) {
	return gulp.src (pipeline.angular ())
		.pipe (concat (paths.concatifiedAngular))
		.pipe (uglify ())
 		.pipe (gulp.dest (dist));
}

function ConcatifyStyles (callback) {
	return gulp.src (pipeline.publicStyles ())
		.pipe (concat (paths.concatifiedStyles))
		.pipe (minify ())
		.pipe (gulp.dest (dist)); 
}