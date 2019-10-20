var gulp = require('gulp');
var concat = require('gulp-concat');
var rimraf = require('rimraf');

gulp.task('default', function(done) {
  console.log("Concating and moving all the js files in src folder");
  gulp.src("src/**.js")
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'));
  done();
});

gulp.task("clean", function (done) {
  rimraf("./build", done);
  done();
});