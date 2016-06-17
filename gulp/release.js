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
	electronPackager({
		arch: conf.packager.arch,
		dir: conf.paths.build.main,
		platform: conf.packager.platform,
		'build-version': packageJson.version,
		packageJson: packageJson,
		download: {
			cache: conf.paths.cache
		},
		name: packageJson.name,
		out: conf.paths.dist.runnable,
		release: conf.paths.release,
		asar: conf.packager.asar,
		tmpdir: conf.paths.tmp,
		version: conf.packager.version,
		packaging: conf.packager.packaging,
		platformResources: {
			darwin: {
				CFBundleDisplayName: packageJson.name,
				CFBundleIdentifier: packageJson.name,
				CFBundleName: packageJson.name,
				CFBundleVersion: packageJson.version
			},
			win: {
				'version-string': packageJson.version,
				'file-version': packageJson.version,
				'product-version': packageJson.version
			}
		}
	}, cb);
});
