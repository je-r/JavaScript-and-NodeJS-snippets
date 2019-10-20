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
        jsRoot: './Scripts/js/',
        tsOutput: './Scripts/js/main/',
        jsWebAppSource: [ './Scripts/js/main/main.js', './Scripts/js/vendor/vendor.js' ]
    };    

    