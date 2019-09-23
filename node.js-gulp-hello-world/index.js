var gulp = require('gulp');

require('./gulpfile');

// calling "gulp hello" programmatically

gulp.series("hello")();