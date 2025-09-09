#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {
	macOSVersion,
	isMacOSVersion,
	isMacOSVersionGreaterThanOrEqualTo,
	assertMacOSVersion,
	assertMacOSVersionGreaterThanOrEqualTo,
} from 'macos-version';

const cli = meow(`
	Usage
	  $ macos-version

	Options
	  --is <semver-range>      Check if the macOS version matches the specified semver range
	  --gte <version>          Check if the macOS version is greater than or equal to the specified version
	  --assert <semver-range>  Assert that the macOS version matches the specified semver range
	  --assert-gte <version>   Assert that the macOS version is greater than or equal to the specified version

	Examples
	  $ macos-version
	  14.0

	  $ macos-version --is '>10.10'
	  ✔ macOS version satisfies >10.10

	  $ macos-version --gte 10.10
	  ✔ macOS version is greater than or equal to 10.10

	  $ macos-version --assert '>10.10'
	  ✔ macOS version satisfies >10.10

	  $ macos-version --assert-gte 10.10
	  ✔ macOS version is greater than or equal to 10.10

	Exit codes
	  0 - Success or condition is true
	  1 - Condition is false or assertion failed
`, {
	importMeta: import.meta,
	flags: {
		is: {
			type: 'string',
		},
		gte: {
			type: 'string',
		},
		assert: {
			type: 'string',
		},
		assertGte: {
			type: 'string',
		},
	},
});

const {is, gte, assert, assertGte} = cli.flags;

if (is) {
	const result = isMacOSVersion(is);
	if (result) {
		console.log(`✔ macOS version satisfies ${is}`);
		process.exit(0);
	} else {
		console.log(`✖ macOS version does not satisfy ${is}`);
		process.exit(1);
	}
}

if (gte) {
	const result = isMacOSVersionGreaterThanOrEqualTo(gte);
	if (result) {
		console.log(`✔ macOS version is greater than or equal to ${gte}`);
		process.exit(0);
	} else {
		console.log(`✖ macOS version is not greater than or equal to ${gte}`);
		process.exit(1);
	}
}

if (assert) {
	try {
		assertMacOSVersion(assert);
		console.log(`✔ macOS version satisfies ${assert}`);
		process.exit(0);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
}

if (assertGte) {
	try {
		assertMacOSVersionGreaterThanOrEqualTo(assertGte);
		console.log(`✔ macOS version is greater than or equal to ${assertGte}`);
		process.exit(0);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
}

// Default behavior - just print the version
console.log(macOSVersion());
