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
var crossZip = require('cross-zip');
var runSequence = require('run-sequence');
var packageJson = require('../package.json');
var conf = require('./conf');

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

function packager(platform, icon, cb){
	electronPackager({

		// Architecture for the build
		arch: conf.packager.arch,

		// Source dir
		dir: conf.paths.build.main,

		// Platform to build
		platform: platform,

		// App version
		'app-version': packageJson.version,

		// The human-readable copyright line for the app. Maps to the `LegalCopyright` metadata
		// property on Windows, and `NSHumanReadableCopyright` on OS X.
		'app-copyright': conf.packager.copyright,

		// Package the application's source code into an archive, using Electron's archive
		// format. Mitigates issues around long path names on Windows and slightly speeds up
		// require().
		asar: conf.packager.asar,

		// The build version of the application. Maps to the FileVersion metadata property on
		// Windows, and CFBundleVersion on OS X. Note: Windows requires the build version to
		// start with a number. We're using the version of the underlying WebTorrent library.
		'build-version': packageJson.version,

		// Download cache
		download: {
			cache: conf.paths.cache
		},

		// Application icon
		icon: icon,

		// Application full name
		name: conf.packager.fullAppName,

		// Output dir
		out: conf.paths.dist.runnable,

		// Temp dir
		tmpdir: conf.paths.tmp,

		// Version
		version: conf.packager.version,

		/**            Mac OS            **/

		// The bundle identifier to use in the application's plist (OS X only).
		'app-bundle-id': 'com.libparsio',

		// The application category type, as shown in the Finder via "View" -> "Arrange by
		// Application Category" when viewing the Applications directory (OS X only).
		'app-category-type': 'public.app-category.utilities',

		/**            Windows           **/

		// Object hash of application metadata to embed into the executable (Windows only)
		'version-string': {

			// Company that produced the file.
			'CompanyName': packageJson.name,

			// Name of the product with which the file is distributed.
			'ProductName': packageJson.name,

			// Original name of the file, not including a path. This information enables an
			// application to determine whether a file has been renamed by a user. The format of
			// the name depends on the file system for which the file was created.
			'OriginalFilename': packageJson.name + '.exe',

			// Internal name of the file, if one exists, for example, a module name if the file
			// is a dynamic-link library. If the file has no internal name, this string should be
			// the original filename, without extension. This string is required.
			'InternalName': packageJson.name + '.exe',

			// Name of the program, displayed to users
			'FileDescription': conf.packager.fullAppName,

			// Product version
			'ProductVersion': packageJson.version
		}
	}, cb);
}

/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

gulp.task('release', function(cb){
	return runSequence('clean:release', 'build:prod', 'release:packager', 'release:zip', cb);
});

gulp.task('release:zip', function(cb){
	return runSequence('release:zip:win32:ia32', 'release:zip:win32:x64', 'release:zip:linux:ia32',
		'release:zip:linux:x64', 'release:zip:darwin:x64', cb);
});

gulp.task('release:zip:darwin:x64', function(cb){
	var input = path.join(conf.paths.dist.runnable, conf.runnable.darwin.x64);

	var output = process.cwd();
	output = path.join(output, conf.paths.dist.zip);
	output = path.join(output, conf.runnable.darwin.x64 + '-' + packageJson.version + '.zip');

	crossZip.zip(input, output, cb);
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
