/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 04/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var gulp = require('gulp');
var runSequence = require('run-sequence');
var conf = require('./conf');

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

gulp.task('build:dev', function(cb){
	return runSequence('clean', 'build:prepare', 'app', cb);
});

gulp.task('build:prod', function(cb){
	return runSequence('clean', 'build:prepare', 'app', cb);
});

gulp.task('build:prepare', ['build:prepare:others', 'build:prepare:backend']);

gulp.task('build:prepare:others', function(){
	var paths = [
		conf.paths.srcFiles.js,
		conf.paths.srcFiles.package,
		conf.paths.srcFiles.node_modules,
		conf.paths.srcFiles.assets
	];
	gulp.src(paths)
		.pipe(gulp.dest(conf.paths.build.main));
});

gulp.task('build:prepare:backend', function(){
	gulp.src(conf.paths.srcFiles.backend)
		.pipe(gulp.dest(conf.paths.build.backend));
});


