const gulp = require('gulp');
const {exec} = require('child_process');

gulp.task('publish', ['build'], () => {
  exec('lerna publish');
});
