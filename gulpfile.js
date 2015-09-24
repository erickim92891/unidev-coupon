/**
 * @Name: require-dir
 * @Description: Node helper module to include directories.
 */
var require_dir = require ('require-dir');

// Requiring the tasks directory so that gulp can execute all tasks in the tasks directory from the root directory.
require_dir ('./tasks');