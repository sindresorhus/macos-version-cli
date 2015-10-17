#!/usr/bin/env node
'use strict';
const meow = require('meow');
const osxVersion = require('osx-version');

meow(`
	Example
	  $ osx-version
	  10.9.3
`);

osxVersion().then(console.log);
