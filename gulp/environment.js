/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 04/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var gulp = require('gulp');
var _ = require('lodash');
var environmentVariablesJson = require('../environment.variables.json');

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

gulp.task('environment', function(cb){
	// Put environment variables in place
	_.forEach(environmentVariablesJson, function(value, key){
		process.env[key] = value;
	});

	// Callback
	cb();
});
