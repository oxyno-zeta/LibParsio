/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 04/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var proc = require('child_process');
var gulp = require('gulp');
var electron = require('electron-prebuilt');
var runSequence = require('run-sequence');
var conf = require('./conf');

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

gulp.task('electron', function(cb){
	return runSequence('electron:prepare', 'electron:run:main', cb);
});

gulp.task('serve', ['watch']);

gulp.task('watch', ['electron:watch'], function() {
	gulp.watch('src/**', ['electron:watch']);
});

gulp.task('electron:watch', function(cb){
	return runSequence('electron:prepare', 'electron:run:watch', cb);
});

gulp.task('electron:prepare', function(cb){
	return runSequence('environment', 'build:dev', cb);
});

gulp.task('electron:run:main', function(cb){
	setTimeout(function(){
		var child = proc.spawn(electron, [conf.paths.build.main]);
		child.on('close', function (code) {
			if (code == 1){
				console.error('Something wrong with the app');
				console.error('Try run "electron src/" to see full error');
			}
			cb();
		});
		child.on('error', function (code) {
			console.error(code);
			cb();
		});
	}, 500);
});

gulp.task('electron:run:watch', function(cb){
	setTimeout(function(){
		var child = proc.spawn(electron, [conf.paths.build.main]);
		child.on('close', function (code) {
			if (code == 1){
				console.error('Something wrong with the app');
				console.error('Try run "electron src/" to see full error');
			}
		});
		child.on('error', function (code) {
			console.error(code);
		});
		cb();
	}, 500);
});

