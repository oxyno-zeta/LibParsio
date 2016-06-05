/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 05/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var path = require('path');
var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var csso = require('gulp-csso');
var uglifySaveLicense = require('uglify-save-license');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var gulpif = require('gulp-if');
var runSequence = require('run-sequence');
var del = require('del');
var conf = require('./conf');

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */



/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

gulp.task('app', function(cb){
	return runSequence(['app:partials', 'app:sass', 'app:js'], 'app:inject', cb);
});

gulp.task('app:partials', function () {
	return gulp.src(conf.paths.srcFiles.app.html)
		.pipe(minifyHtml({
			empty: true,
			spare: true,
			quotes: true
		}))
		.pipe(gulp.dest(conf.paths.build.app.main));
});

gulp.task('app:sass', function(){
	var injectFiles = gulp.src(conf.paths.srcFiles.app.sass.others);

	var injectOptions = {
		transform: function (filePath) {
			filePath = filePath.replace(conf.paths.srcFiles.app.main + '/', '');
			return '@import "' + filePath + '";';
		},
		starttag: '// inject',
		endtag: '// endinject',
		addRootSlash: false
	};

	return gulp.src(conf.paths.srcFiles.app.sass.main)
		.pipe(inject(injectFiles, injectOptions))
		.pipe(sass()).on('error', sass.logError)
		.pipe(autoprefixer({
			browsers: ['last 4 versions']
		})).on('error', console.error)
		.pipe(gulp.dest(conf.paths.build.app.main));
});

gulp.task('app:js', function(){
	return gulp.src(conf.paths.srcFiles.app.js)
		.pipe(gulp.dest(conf.paths.build.app.main));
});

gulp.task('app:inject', function(){
	var injectStyles = gulp.src(conf.paths.build.app.css, {
		read: false
	});

	var injectScripts = gulp.src(conf.paths.build.app.js)
		.pipe(angularFilesort()).on('error', console.error);

	var injectOptions = {
		ignorePath: [conf.paths.build.app.main],
		addRootSlash: false
	};

	return gulp.src(conf.paths.srcFiles.index)
		.pipe(inject(injectStyles, injectOptions))
		.pipe(inject(injectScripts, injectOptions))
		.pipe(gulp.dest(conf.paths.build.app.main));
});

