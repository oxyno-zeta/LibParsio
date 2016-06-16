/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 11/06/16
 * Licence: See Readme
 */
(function () {
	'use strict';

	angular
		.module('libparsio.technical.constant')
		.constant('PARSE_CONSTANT', {
			allPossibleParsing: [
				{
					platform: 'npm',
					fixture: ['package.json'],
					mode: 'javascript'
				},
				{
					platform: 'cpanMetaYML',
					fixture: ['META.yml'],
					mode: 'yaml'
				},
				{
					platform: 'cpanMetaJSON',
					fixture: ['META.json'],
					mode: 'javascript'
				},
				{
					platform: 'cran',
					fixture: ['DESCRIPTION'],
					mode: ''
				},
				{
					platform: 'npmshrinkwrap',
					fixture: ['npm-shrinkwrap.json'],
					mode: 'javascript'
				},
				{
					platform: 'rubygems',
					fixture: ['Gemfile', 'gems.rb'],
					mode: 'ruby'
				},
				{
					platform: 'rubygemslockfile',
					fixture: ['Gemfile.lock'],
					mode: 'ruby'
				},
				{
					platform: 'gemspec',
					fixture: ['devise.gemspec'],
					mode: 'ruby'
				},
				{
					platform: 'podspec',
					fixture: ['example.podspec'],
					mode: 'ruby'
				},
				{
					platform: 'podspecJson',
					fixture: ['ALOSRPAuth.podspec.json'],
					mode: 'javascript'
				},
				{
					platform: 'packagist',
					fixture: ['composer.json', 'composer2.json'],
					mode: 'javascript'
				},
				{
					platform: 'packagistlockfile',
					fixture: ['composer.lock'],
					mode: 'javascript'
				},
				{
					platform: 'nuspec',
					fixture: ['example.nuspec'],
					mode: 'xml'
				},
				{
					platform: 'meteor',
					fixture: ['versions.json'],
					mode: 'javascript'
				},
				{
					platform: 'cargo',
					fixture: ['Cargo.toml'],
					mode: 'toml'
				},
				{
					platform: 'cargolockfile',
					fixture: ['Cargo.lock'],
					mode: 'toml'
				},
				{
					platform: 'elm',
					fixture: ['elm-package.json', 'elm_dependencies.json'],
					mode: 'javascript'
				},
				{
					platform: 'elmExact',
					fixture: ['exact-dependencies.json'],
					mode: 'javascript'
				},
				{
					platform: 'bower',
					fixture: ['bower.json'],
					mode: 'javascript'
				},
				{
					platform: 'dub',
					fixture: ['dub.json'],
					mode: 'javascript'
				},
				{
					platform: 'dubSdl',
					fixture: ['dub.sdl'],
					mode: ''
				},
				{
					platform: 'pub',
					fixture: ['pubspec.yaml'],
					mode: 'yaml'
				},
				{
					platform: 'publock',
					fixture: ['pubspec.lock'],
					mode: ''
				},
				{
					platform: 'clojars',
					fixture: ['project.clj'],
					mode: 'clojure'
				},
				{
					platform: 'hex',
					fixture: ['mix.exs'],
					mode: ''
				},
				{
					platform: 'pypi',
					fixture: ['requirements.txt'],
					mode: ''
				},
				{
					platform: 'pypiSetup',
					fixture: ['setup.py', 'setup2.py'],
					mode: 'python'
				},
				{
					platform: 'cocoapods',
					fixture: ['Podfile'],
					mode: 'ruby'
				},
				{
					platform: 'cocoapodsLockfile',
					fixture: ['Podfile.lock'],
					mode: ''
				},
				{
					platform: 'nuget',
					fixture: ['Project.json'],
					mode: 'javascript'
				},
				{
					platform: 'nugetLockfile',
					fixture: ['Project.lock.json'],
					mode: 'javascript'
				},
				{
					platform: 'nugetPackages',
					fixture: ['packages.config'],
					mode: 'xml'
				},
				{
					platform: 'julia',
					fixture: ['REQUIRE'],
					mode: ''
				},
				{
					platform: 'go',
					fixture: ['Godeps.json'],
					mode: 'javascript'
				},
				{
					platform: 'glide',
					fixture: ['glide.yaml'],
					mode: 'yaml'
				},
				{
					platform: 'glidelockfile',
					fixture: ['glide.lock'],
					mode: ''
				},
				{
					platform: 'cartfile',
					fixture: ['Cartfile'],
					mode: ''
				},
				{
					platform: 'cartfileprivate',
					fixture: ['Cartfile.private'],
					mode: ''
				},
				{
					platform: 'cartfileresolved',
					fixture: ['Cartfile.resolved'],
					mode: ''
				},
				{
					platform: 'maven',
					fixture: ['pom.xml'],
					mode: 'xml'
				},
				{
					platform: 'ivy',
					fixture: ['ivy.xml'],
					mode: 'xml'
				},
				{
					platform: 'shard',
					fixture: ['shard.yml'],
					mode: 'yaml'
				},
				{
					platform: 'shardLockfile',
					fixture: ['shard.lock'],
					mode: 'ruby'
				}
			]
		});

})();