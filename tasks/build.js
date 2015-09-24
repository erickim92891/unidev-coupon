/**
 * Main build command
 *
 * ---------------------------------------------------------------
 *
 * 1. Cleans all temporary directories
 * 2. Sets process environment to `development`.
 * 3. Copies main index.html (in paths.mainTemplate) into your root application.
 * 4. Links main bower files into the newly created index.html.
 * 5. Browserify all config and helper files and copy into temporary public directory (paths.copiedPublic).
 * 6. Copy all asset files into temporary public directory (paths.copiedPublic).
 * 7. Link all styles and scripts into the newly created index.html.
 * 8. Cache all angular templates into angular/template.js
 * 9. Link all angular files into the newly created index.html.
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');

/* END MODULES */

// Task to clean up gulp generated files and directories.
gulp.task ('build', [
	'development',
	'jshint',
	'clean',
	'copy-main-template',
	'copy-assets',
	'angular-templatecache',
	'linker'
]);

gulp.task ('build-prod', [
	'production',
	'jshint',
	'clean',
	'copy-main-template',
	'copy-assets',
	'angular-templatecache',
	'concatify',
	'linker-prod'
]);