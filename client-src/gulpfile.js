'use strict';
// include the required packages.
var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require("gulp-rename"),
  jspm = require('gulp-jspm'),
  argv = require('yargs').argv,
  uglify = require('gulp-uglify');

// Get one .styl file and render
gulp.task('styl', function () {

  var destPath = './app/styles';
  var distPath = argv.dist ? './dist/app/styles' : '';

  gulp.src('./app/**/*.styl')
    //.pipe(sourcemaps.init())
    .pipe(stylus({
      compress: false,
      linenos: false,
      'include css': false
    }))
    .pipe(concat('screen.css'))
    //.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destPath))
    .pipe(gulp.dest(distPath));
});

gulp.task('bundle', function(){

  if (argv.dist) {
    return gulp.src('app/main.js')
      .pipe(jspm({selfExecutingBundle: true}))
      .pipe(rename("app.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest('dist/'));
  } else {
    return;
  }
});

gulp.task('buildcss', function(){
  return gulp.src('app/main.js')
    .pipe(jspm({selfExecutingBundle: true}))
    .pipe(rename("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

// Default gulp task to run
gulp.task('default', ['styl', 'bundle']);
