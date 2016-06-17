/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 04/06/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */

var _ = require('lodash');
var packageJson = require('../package.json');
var electronVersion = getElectronVersion();

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

/**
 * Get Electron Version.
 */
function getElectronVersion(){
	var electronOriginalVersion = packageJson['devDependencies']['electron-prebuilt'];
	if (!_.isInteger(electronOriginalVersion[0])){
		electronOriginalVersion = electronOriginalVersion.substring(1, electronOriginalVersion.length);
	}
	return electronOriginalVersion;
}

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */

module.exports = {
	paths: {
		src: 'src/',
		srcFiles: {
			node_modules: 'src/node_modules*/**',
			js: 'src/*.js',
			index: 'src/app/index.html',
			app: {
				main: 'src/app',
				html: ['!src/app/index.html', 'src/app/**/*.html'],
				js: 'src/app/**/*.js',
				sass: {
					main: 'src/app/app.scss',
					others: ['src/app/**/*.sass', 'src/app/**/*.scss', '!src/app/app.scss']
				}
			},
			package: 'src/package.json',
			assets: 'src/assets*/**'
		},
		build: {
			main: 'build/',
			app: {
				main: 'build/app/',
				js: 'build/app/**/*.js',
				css: 'build/app/*.css',
				index: 'build/app/index.html'
			}
		},
		cache: 'cache/',
		tmp: '.tmp/',
		dist: {
			main: 'dist/',
			runnable: 'dist/runnable/',
			zip: 'dist/zip/'
		},
		release: 'release/'
	},
	packager: {
		arch: 'all',
		platform: 'all',
		version: electronVersion, // Electron version
		asar: true,
		packaging: true
	},
	runnable: {
		linux: {
			ia32: packageJson.name + '-linux-ia32',
			x64: packageJson.name + '-linux-x64'
		},
		win32: {
			ia32: packageJson.name + '-win32-ia32',
			x64: packageJson.name + '-win32-x64'
		},
		darwin: {
			x64: packageJson.name + '-darwin-x64'
		},
		mas: {
			x64: packageJson.name + '-mas-x64'
		}
	}
};
