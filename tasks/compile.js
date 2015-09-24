/**
 * Compile SASS files.
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to compile all SASS files in the temporary public directory.
 * paths.copiedPublic
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');

// Terminal string styler.
var chalk = require ('chalk');

// Helper module for chalk.
var chalkHelper = require ('../helpers/chalk_helper.js');

// Globals configuration file.
var paths = require ('../config/paths.js');

// Compile SASS files.
var sass = require ('gulp-sass');

var concat = require ('gulp-concat');

// Auto-link bower and public asset files.
/* gulp.task ('compile-sass', CompileSass);

function CompileSass () {
	return gulp.src (paths.styles)
		.pipe (concat ('sass.scss'))
		.pipe (sass ().on ('error', sass.logError))
		.pipe (gulp.dest ('./'));
}
 */