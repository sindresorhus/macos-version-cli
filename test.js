import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js');
	t.true(stdout.length > 0);
	t.regex(stdout, /^\d+\.\d+(\.\d+)?$/);
});

test('--is flag with true condition', async t => {
	const {stdout, exitCode} = await execa('./cli.js', ['--is', '>10.0'], {reject: false});
	t.is(exitCode, 0);
	t.true(stdout.includes('✔'));
	t.true(stdout.includes('satisfies >10.0'));
});

test('--is flag with false condition', async t => {
	const {stdout, exitCode} = await execa('./cli.js', ['--is', '>100.0'], {reject: false});
	t.is(exitCode, 1);
	t.true(stdout.includes('✖'));
	t.true(stdout.includes('does not satisfy >100.0'));
});

test('--gte flag with true condition', async t => {
	const {stdout, exitCode} = await execa('./cli.js', ['--gte', '10.0'], {reject: false});
	t.is(exitCode, 0);
	t.true(stdout.includes('✔'));
	t.true(stdout.includes('greater than or equal to 10.0'));
});

test('--gte flag with false condition', async t => {
	const {stdout, exitCode} = await execa('./cli.js', ['--gte', '100.0'], {reject: false});
	t.is(exitCode, 1);
	t.true(stdout.includes('✖'));
	t.true(stdout.includes('not greater than or equal to 100.0'));
});

test('--assert flag with true condition', async t => {
	const {stdout, exitCode} = await execa('./cli.js', ['--assert', '>10.0'], {reject: false});
	t.is(exitCode, 0);
	t.true(stdout.includes('✔'));
	t.true(stdout.includes('satisfies >10.0'));
});

test('--assert flag with false condition', async t => {
	const {stderr, exitCode} = await execa('./cli.js', ['--assert', '>100.0'], {reject: false});
	t.is(exitCode, 1);
	t.true(stderr.length > 0);
});

test('--assert-gte flag with true condition', async t => {
	const {stdout, exitCode} = await execa('./cli.js', ['--assert-gte', '10.0'], {reject: false});
	t.is(exitCode, 0);
	t.true(stdout.includes('✔'));
	t.true(stdout.includes('greater than or equal to 10.0'));
});

test('--assert-gte flag with false condition', async t => {
	const {stderr, exitCode} = await execa('./cli.js', ['--assert-gte', '100.0'], {reject: false});
	t.is(exitCode, 1);
	t.true(stderr.length > 0);
});

test('--is flag with semver range', async t => {
	const {stdout, exitCode} = await execa('./cli.js', ['--is', '>=10.0 <100.0'], {reject: false});
	t.is(exitCode, 0);
	t.true(stdout.includes('✔'));
});

test('--help flag shows usage', async t => {
	const {stdout} = await execa('./cli.js', ['--help']);
	t.true(stdout.includes('--is'));
	t.true(stdout.includes('--gte'));
	t.true(stdout.includes('--assert'));
	t.true(stdout.includes('--assert-gte'));
});
