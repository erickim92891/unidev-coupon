/**
 * Set environment
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to set the application environment.
 */

/* MODULES */

// Stream building javascript task runner.
var gulp = require ('gulp');

// Globals configuration file.
var globals = require ('../config/globals.js');

/* END MODULES */

// Set environment to production.
gulp.task ('production', SetProduction);

// Set environment to development.
gulp.task ('development', SetDevelopment);

function SetProduction () {
	SetEnvironment (globals.env.production);
}

function SetDevelopment () {
	SetEnvironment (globals.env.development);
}

/**
 * Function
 * @Name: SetEnvironment
 * @Description: Sets application environment.
 * @Params:
 *		env: The environment name.
 */
function SetEnvironment (env) {
	process.env.NODE_ENV = env;
}