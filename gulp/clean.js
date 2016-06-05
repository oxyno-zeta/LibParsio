/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 05/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var conf = require('./conf');

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

gulp.task('clean:full', function(cb){
	return runSequence(['clean', 'clean:release'], cb);
});

gulp.task('clean', function(cb){
	return runSequence(['clean:dir:build'], cb);
});

gulp.task('clean:release', function(cb){
	return runSequence(['clean:dir:tmp', 'clean:dir:release', 'clean:dir:dist'], cb);
});

gulp.task('clean:dir:build', function(){
	return del([conf.paths.build.main]);
});

gulp.task('clean:dir:cache', function(){
	return del([conf.paths.cache]);
});

gulp.task('clean:dir:tmp', function(){
	return del([conf.paths.tmp]);
});

gulp.task('clean:dir:release', function(){
	return del([conf.paths.release]);
});

gulp.task('clean:dir:dist', function(){
	return del([conf.paths.dist.main]);
});
