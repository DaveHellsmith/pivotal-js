const gulp = require('gulp');
const {spawn} = require('child_process');
const promisify = require('es6-promisify');
const npm = require('npm');
const glob = require('glob');
const path = require('path');

const npmLoad = promisify(npm.load);


gulp.task('lerna-publish', ['build'], (callback) => {
  spawn('lerna', ['publish'], {stdio: 'inherit', env: process.env}).once('close', callback);
});

const addOwners = async function(packageNames) {
  await npmLoad({});
  const npmOwner = promisify(npm.commands.owner);

  const owners = ['charleshansen', 'esharma', 'rdy'];
  for (const owner of owners) {
    for (const packageName of packageNames) {
      try {
        await npmOwner(['add', owner, packageName]);
      } catch (e) {
        console.log('failed adding owners', e);
      }
    }
  }
};

gulp.task('publish', ['lerna-publish'], (done) => {
  (async function() {
    const packageNames = glob.sync('packages/*')
      .map(filepath => path.basename(filepath));

    await addOwners(packageNames);
    done();
  })();
});
