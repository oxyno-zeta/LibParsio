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

// Constants
var fullAppName = 'LibParsio';

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
			backend: ['src/backend/**/*.js'],
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
			},
			backend: 'build/backend/'
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
		arch: ['ia32', 'x64'],
		platform: {
			darwin: {
				name: 'darwin',
				icon: 'resources/logo/logo.icns'
			},
			linux: {
				name: 'linux',
				icon: 'resources/logo/logo.png'
			},
			win32: {
				name: 'win32',
				icon: 'resources/logo/logo.ico'
			}
		},
		version: electronVersion, // Electron version
		asar: true,
		packaging: true,
		copyright: 'Copyright © 2014-2016 LibParsio',
		fullAppName: fullAppName
	},
	runnable: {
		linux: {
			ia32: fullAppName + '-linux-ia32',
			x64: fullAppName + '-linux-x64'
		},
		win32: {
			ia32: fullAppName + '-win32-ia32',
			x64: fullAppName + '-win32-x64'
		},
		darwin: {
			x64: fullAppName + '-darwin-x64'
		},
		mas: {
			x64: fullAppName + '-mas-x64'
		}
	}
};
