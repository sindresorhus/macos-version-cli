import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['fixture.js']);
	t.true(stdout.length > 0);
});
