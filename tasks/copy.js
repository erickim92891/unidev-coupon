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

// Path configuration file.
var paths = require ('../config/paths.js');

/* END MODULES */

// Copy public/templates/index.html to root directory.
gulp.task ('copy-main-template', ['clean'], CopyMainTemplate);

// Copy assets directory into temporary public directory (paths.copiedPublic).
gulp.task ('copy-assets', ['clean'], CopyAssets);

/**
 * Function
 * @Name: CopyMainTemplate
 * @Description: Copy and create new index.html.
 */
function CopyMainTemplate (callback) {
	return gulp.src (paths.mainTemplate)
		.pipe (gulp.dest ('.'));
}

/**
 * Function
 * @Name: CopyAssets
 * @Description: Copy and create new public directory.
 */
function CopyAssets (callback) {
	return gulp.src (paths.assets + '/**/*')
        .pipe (gulp.dest (paths.copiedPublic));
}

