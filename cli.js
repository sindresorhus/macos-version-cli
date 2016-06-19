#!/usr/bin/env node
'use strict';
const meow = require('meow');
const macosVersion = require('macos-version');

meow(`
	Example
	  $ macos-version
	  10.9.3
`);

macosVersion().then(console.log);
