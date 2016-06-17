/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 17/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
var gulp = require('gulp');
var bump = require('gulp-bump');

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */



/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */
// MAJOR ('major') version when you make incompatible API changes
// MINOR ('minor') version when you add functionality in a backwards-compatible manner
// PATCH ('patch') version when you make backwards-compatible bug fixes.
gulp.task('bump', ['bump:minor']);

gulp.task('bump:major', ['bump:major:root', 'bump:major:src']);
gulp.task('bump:minor', ['bump:minor:root', 'bump:minor:src']);
gulp.task('bump:patch', ['bump:patch:root', 'bump:patch:src']);

gulp.task('bump:major:root', function(){
	return gulp.src(['package.json'])
		.pipe(bump({type:'major'}))
		.pipe(gulp.dest('./'));
});

gulp.task('bump:major:src', function(){
	return gulp.src(['src/package.json'])
		.pipe(bump({type:'major'}))
		.pipe(gulp.dest('./src/'));
});

gulp.task('bump:minor:root', function(){
	return gulp.src(['package.json'])
		.pipe(bump({type:'minor'}))
		.pipe(gulp.dest('./'));
});

gulp.task('bump:minor:src', function(){
	return gulp.src(['src/package.json'])
		.pipe(bump({type:'minor'}))
		.pipe(gulp.dest('./src/'));
});

gulp.task('bump:patch:root', function(){
	return gulp.src(['package.json'])
		.pipe(bump({type:'patch'}))
		.pipe(gulp.dest('./'));
});

gulp.task('bump:patch:src', function(){
	return gulp.src(['src/package.json'])
		.pipe(bump({type:'patch'}))
		.pipe(gulp.dest('./src'));
});

