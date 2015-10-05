import childProcess from 'child_process';
import test from 'ava';

test(t => {
	t.plan(2);

	childProcess.execFile('./cli.js', ['fixture.js'], {
		cwd: __dirname
	}, function (err, stdout) {
		t.ifError(err);
		t.true(stdout.trim().length > 0);
	});
});
