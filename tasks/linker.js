/**
 * Auto-link css/scripts into main html template.
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to auto-include css and js files into the main index.html template
 * from both the bower and public directories.
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');

// Terminal string styler.
var chalk = require ('chalk');

// Helper module for chalk.
var chalkHelper = require ('../helpers/chalk_helper.js');

// Paths for important bower files.
var mainBowerFiles = require ('main-bower-files');

// Globals configuration file.
var paths = require ('../config/paths.js');

var pipeline = require ('../config/pipeline.js');

// Javascript utility library.
var _ = require ('lodash');

// Module to inject files into an html template.
var inject = require ('gulp-inject');

/* END MODULES */

gulp.task ('linker', ['development', 'copy-main-template', 'angular-templatecache', 'copy-assets'], Linker);
gulp.task ('linker-prod', ['production', 'copy-main-template', 'concatify'], LinkerProd);
/**
 * Function
 * @Name: LinkBowerFiles
 * @Description: Auto-link important bower files.
 * @Params:
 *		callback: The callback function used to pipe gulp tasks.
 */
function Linker (callback) {
	// Inject important bower file paths into main index.html template (public/templates/index.html).
	return gulp.src (paths.copiedTemplate)
		.pipe (Inject (mainBowerFiles (), 'bower'))
		.pipe (Inject (pipeline.publicScripts (), 'scripts'))
		.pipe (Inject (pipeline.publicStyles (), 'styles'))
		.pipe (Inject (pipeline.angular (), 'angular'))
		.pipe (gulp.dest ('./'));
	//return callback ();
}

function LinkerProd (callback) {
	return gulp.src (paths.copiedTemplate)
		.pipe (Inject (mainBowerFiles (), 'bower'))
 		.pipe (Inject ([paths.copiedPublic + '/' + paths.concatifiedAngular], 'angular'))
		.pipe (Inject ([paths.copiedPublic + '/' + paths.concatifiedStyles], 'styles'))
		.pipe (Inject ([paths.copiedPublic + '/' + paths.concatifiedScripts], 'scripts')) 
		.pipe (gulp.dest ('./'));	
}

function Inject (files, type) {
	LogLinkedFiles (files);
	return inject (gulp.src (files, {read: false}), {relative: true, starttag: '<!-- inject:' + type + ':{{ext}} -->'});
	
	/**
	 * Function
	 * @Name: LogBowerFiles
	 * @Description: Log the bower files with chalk.
	 * @Params:
	 *		bowerFiles: The list of bower file paths returned by main-bower-files module.
	 */
	function LogLinkedFiles (files) {
		
		//var logfiles = _.union ([], files);
		
		if (_.size (files) > 0) {
			// Log all important bower file paths.
			chalkHelper.header ('List of Linked Files...');
			chalkHelper.list (files, 'blue');
		} else {
			chalkHelper.header ('Cannot find link any files.', 'red');
		}
	}
}
