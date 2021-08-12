#!/usr/bin/env node
import meow from 'meow';
import {macOSVersion} from 'macos-version';

meow(`
	Example
	  $ macos-version
	  10.9.3
`, {
	importMeta: import.meta,
});

console.log(macOSVersion());
