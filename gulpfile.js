/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 04/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var fs = require('fs');
var gulp = require('gulp');
var _ = require('lodash');
// Constants
var path = './gulp/';

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

try {
	_.forEach(fs.readdirSync(path), function (file) {
		require(path + file);
	});

	gulp.task('default', ['electron']);
}
catch (e){
	console.error(e);
}
