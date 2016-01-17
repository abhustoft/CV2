// include the required packages.
var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  gp_concat = require('gulp-concat'),
  gp_rename = require('gulp-rename');


// include, if you want to work with sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// Get one .styl file and render
gulp.task('styl', function () {
  gulp.src('./app/**/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: false,
      linenos: false,
      'include css': false
    }))
    .pipe(gp_concat('screen.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/styles'));
});

// Default gulp task to run
gulp.task('default', ['styl']);
