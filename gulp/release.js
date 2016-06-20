/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 04/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var electronPackager = require('electron-packager');
var zip = require('gulp-zip');
var runSequence = require('run-sequence');
var packageJson = require('../package.json');
var conf = require('./conf');

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

function packager(platform, icon, cb){
	electronPackager({
		arch: conf.packager.arch,
		dir: conf.paths.build.main,
		platform: platform,
		'app-version': packageJson.version,
		asar: conf.packager.asar,
		'build-version': packageJson.version,
		download: {
			cache: conf.paths.cache
		},
		icon: icon,
		name: packageJson.name,
		out: conf.paths.dist.runnable,
		tmpdir: conf.paths.tmp,
		version: conf.packager.version,
		// Mac OS
		'app-bundle-id': 'com.libparsio',
		'app-category-type': 'public.app-category.utilities',
		// Windows
		'version-string': {
			'CompanyName': packageJson.name,
			'ProductName': packageJson.name
		}
	}, cb);
}

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

gulp.task('release', function(cb){
	return runSequence('clean:release', 'build:prod', 'release:packager', 'release:zip', cb);
});

// Cannot zip MAS and DARWIN...
gulp.task('release:zip', function(cb){
	return runSequence(['release:zip:win32:ia32', 'release:zip:win32:x64', 'release:zip:linux:ia32',
		'release:zip:linux:x64'], cb);
});

gulp.task('release:zip:win32:ia32', function(){
	return gulp.src(path.join(conf.paths.dist.runnable, conf.runnable.win32.ia32 + '/**'))
		.pipe(zip(conf.runnable.win32.ia32 + '-' + packageJson.version + '.zip'))
		.pipe(gulp.dest(conf.paths.dist.zip));
});

gulp.task('release:zip:win32:x64', function(){
	return gulp.src(path.join(conf.paths.dist.runnable, conf.runnable.win32.x64 + '/**'))
		.pipe(zip(conf.runnable.win32.x64 + '-' + packageJson.version + '.zip'))
		.pipe(gulp.dest(conf.paths.dist.zip));
});

gulp.task('release:zip:linux:ia32', function(){
	return gulp.src(path.join(conf.paths.dist.runnable, conf.runnable.linux.ia32 + '/**'))
		.pipe(zip(conf.runnable.linux.ia32 + '-' + packageJson.version + '.zip'))
		.pipe(gulp.dest(conf.paths.dist.zip));
});

gulp.task('release:zip:linux:x64', function(){
	return gulp.src(path.join(conf.paths.dist.runnable, conf.runnable.linux.x64 + '/**'))
		.pipe(zip(conf.runnable.linux.x64 + '-' + packageJson.version + '.zip'))
		.pipe(gulp.dest(conf.paths.dist.zip));
});

gulp.task('release:packager', function(cb) {
	runSequence('release:packager:win32', 'release:packager:linux', 'release:packager:darwin', cb);
});

gulp.task('release:packager:win32', function(cb) {
	packager(conf.packager.platform.win32.name, conf.packager.platform.win32.icon, cb);
});

gulp.task('release:packager:linux', function(cb) {
	packager(conf.packager.platform.linux.name, conf.packager.platform.linux.icon, cb);
});

gulp.task('release:packager:darwin', function(cb) {
	packager(conf.packager.platform.darwin.name, conf.packager.platform.darwin.icon, cb);
});
