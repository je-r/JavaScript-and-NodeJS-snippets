//
var gulp = require('gulp'),
    rimraf = require('rimraf'),
    ts = require('gulp-typescript'),
    rename = require('gulp-rename'),
    merge = require('merge'),
    fs = require('fs'),
    del = require('del'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass');

    var paths = {
       jsRoot: "./Scripts/js/",
       jsOutput: './Scripts/js/main/'
    };    

    gulp.task("clean-js", function (done) {
        rimraf(paths.jsOutput, done);
        done();
    });

    gulp.task('merge-js', function (done) {

        var jsResult = gulp.src(paths.jsRoot + "*.js")

        merge([
            jsResult
                .pipe(gulp.dest(paths.jsOutput))
        ]);
    
        done();
    });

    gulp.task('distribute-scripts', gulp.series('clean-js', 'merge-js'));


