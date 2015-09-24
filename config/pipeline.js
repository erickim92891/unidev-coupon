var paths = require ('./paths');
var _ = require ('lodash');

module.exports = {
	publicScripts: PublicScripts,
	publicStyles: PublicStyles,
	angular: Angular
};

function PublicScripts () {
	var publicScripts = [
		'scripts/bundle.js',
		'scripts/template.js',
		'scripts/**/*.js'
	];
	
	return AppendCopiedPublicPath (publicScripts);
}

function PublicStyles () {
	var publicStyles = [
		'styles/**/*.css'
	];
	
	return AppendCopiedPublicPath (publicStyles);
}

function Angular () {
	var angular = [
		'angular/app/app.module.js',
		'angular/app/**/*.module.js',
		'angular/app/**/*.js'
	];
	
	return angular;
}
			  
function AppendCopiedPublicPath (pipeline) {
	return _.map (pipeline, function (path) {
		return paths.copiedPublic + '/' + path;
	});		
}