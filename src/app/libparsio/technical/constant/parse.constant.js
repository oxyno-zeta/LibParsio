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
					fixture: ['package.json']
				},
				{
					platform: 'cpanMetaYML',
					fixture: ['META.yml']
				},
				{
					platform: 'cpanMetaJSON',
					fixture: ['META.json']
				},
				{
					platform: 'cran',
					fixture: ['DESCRIPTION']
				},
				{
					platform: 'npmshrinkwrap',
					fixture: ['npm-shrinkwrap.json']
				},
				{
					platform: 'rubygems',
					fixture: ['Gemfile']
				},
				{
					platform: 'rubygemslockfile',
					fixture: ['Gemfile.lock']
				},
				{
					platform: 'rubygems',
					fixture: ['gems.rb']
				},
				{
					platform: 'gemspec',
					fixture: ['devise.gemspec']
				},
				{
					platform: 'podspec',
					fixture: ['example.podspec']
				},
				{
					platform: 'podspecJson',
					fixture: ['ALOSRPAuth.podspec.json']
				},
				{
					platform: 'packagist',
					fixture: ['composer.json', 'composer2.json']
				},
				{
					platform: 'packagistlockfile',
					fixture: ['composer.lock']
				},
				{
					platform: 'nuspec',
					fixture: ['example.nuspec']
				},
				{
					platform: 'meteor',
					fixture: ['versions.json']
				},
				{
					platform: 'cargo',
					fixture: ['Cargo.toml']
				},
				{
					platform: 'cargolockfile',
					fixture: ['Cargo.lock']
				},
				{
					platform: 'elm',
					fixture: ['elm-package.json', 'elm_dependencies.json']
				},
				{
					platform: 'elmExact',
					fixture: ['exact-dependencies.json']
				},
				{
					platform: 'bower',
					fixture: ['bower.json']
				},
				{
					platform: 'dub',
					fixture: ['dub.json']
				},
				{
					platform: 'dubSdl',
					fixture: ['dub.sdl']
				},
				{
					platform: 'pub',
					fixture: ['pubspec.yaml']
				},
				{
					platform: 'publock',
					fixture: ['pubspec.lock']
				},
				{
					platform: 'clojars',
					fixture: ['project.clj']
				},
				{
					platform: 'hex',
					fixture: ['mix.exs']
				},
				{
					platform: 'pypi',
					fixture: ['requirements.txt']
				},
				{
					platform: 'pypiSetup',
					fixture: ['setup.py', 'setup2.py']
				},
				{
					platform: 'cocoapods',
					fixture: ['Podfile']
				},
				{
					platform: 'cocoapodsLockfile',
					fixture: ['Podfile.lock']
				},
				{
					platform: 'nuget',
					fixture: ['Project.json']
				},
				{
					platform: 'nugetLockfile',
					fixture: ['Project.lock.json']
				},
				{
					platform: 'nugetPackages',
					fixture: ['packages.config']
				},
				{
					platform: 'julia',
					fixture: ['REQUIRE']
				},
				{
					platform: 'go',
					fixture: ['Godeps.json']
				},
				{
					platform: 'glide',
					fixture: ['glide.yaml']
				},
				{
					platform: 'glidelockfile',
					fixture: ['glide.lock']
				},
				{
					platform: 'cartfile',
					fixture: ['Cartfile']
				},
				{
					platform: 'cartfileprivate',
					fixture: ['Cartfile.private']
				},
				{
					platform: 'cartfileresolved',
					fixture: ['Cartfile.resolved']
				},
				{
					platform: 'maven',
					fixture: ['pom.xml']
				},
				{
					platform: 'ivy',
					fixture: ['ivy.xml']
				},
				{
					platform: 'shard',
					fixture: ['shard.yml']
				},
				{
					platform: 'shardLockfile',
					fixture: ['shard.lock']
				}
			]
		});

})();