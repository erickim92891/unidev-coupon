/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to clean out the contents in the temporary public directory of your
 * angularfire application.
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');

// Terminal string styler.
var chalk = require ('chalk');

// Helper module for chalk.
var chalkHelper = require ('../helpers/chalk_helper.js');

// Javascript utility library.
var _ = require ('lodash');

// Module to delete directories and files.
var del = require ('del');

// Path configuration file.
var paths = require ('../config/paths.js');

// Promise library.
var q = require ('q');

/* END MODULES */

// Task to clean up gulp generated files and directories.
gulp.task ('clean', ['jshint'], Clean);

/**
 * Function
 * @Name: Clean
 * @Description: Remove gulp generated files and directories.
 * @Params:
 *		callback: The callback function used to pipe gulp tasks.
 */
function Clean (callback) {	
	var deferred = q.defer ();
	
	// Deletes any directories or files from the root directory.
	del ([
		paths.copiedPublic,			// Temp asset directory (usually contains minified and concatenated files).
		paths.copiedTemplate	// Main index.html template with all auto generated links.
	])
	.then (CleanReport);
	
	return deferred.promise;
	
	/**
	 * Function
	 * @Name: CleanReport
	 * @Description: Console message to show which files/directories got deleted.
	 * @Params:
	 *		paths: An array of file/directory names that got deleted.
	 */
	function CleanReport (paths) {
		if (_.size (paths) > 0) {
			// Log all files/directories that got deleted.
			chalkHelper.header ('Files/Directories deleted...');
			chalkHelper.list (paths, 'red');
		} else {
			chalkHelper.header ('No files to delete...', 'red');
		}
		
		deferred.resolve ();
	}
}