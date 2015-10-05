#!/usr/bin/env node
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';
const meow = require('meow');
const osxVersion = require('osx-version');

meow(`
	Example
	  $ osx-version
	  10.9.3
`);

osxVersion().then(console.log);
