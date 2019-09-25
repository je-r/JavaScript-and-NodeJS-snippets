var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', [], function() {
  console.log("Concating and moving all the js files in src folder");
  gulp.src("src/**.js")
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'));
});