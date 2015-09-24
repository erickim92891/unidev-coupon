/**
 * Angular-Templatecache
 *
 * ---------------------------------------------------------------
 *
 * This task will store all angular template files into a template.js
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');

// Path configuration file.
var paths = require ('../config/paths.js');

// Browserify module.
var template = require ('gulp-angular-templatecache');

// Browserifies the config and helper files.
gulp.task ('angular-templatecache', ['copy-assets'], AngularTemplateCache);

/**
 * Function
 * @Name: Browserify
 * @Description: Browserifies all .js files in the config and helpers directory.
 */
function AngularTemplateCache (callback) {
	return gulp.src (paths.angular + '/**/*template.html')
		.pipe (template ('template.js', {standalone: true}))
		.pipe (gulp.dest(paths.copiedPublic + '/scripts'));
}