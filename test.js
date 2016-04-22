import test from 'ava';
import execa from 'execa';

test(async t => {
	t.true((await execa('./cli.js', ['fixture.js'])).stdout.length > 0);
});
