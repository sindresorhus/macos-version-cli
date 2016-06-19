import test from 'ava';
import execa from 'execa';

test(async t => {
	t.true((await execa.stdout('./cli.js', ['fixture.js'])).length > 0);
});
