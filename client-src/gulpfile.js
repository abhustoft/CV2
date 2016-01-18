// include the required packages.
var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require("gulp-rename"),
  jspm = require('gulp-jspm'),
  uglify = require('gulp-uglify');

// Get one .styl file and render
gulp.task('styl', function () {
  gulp.src('./app/**/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: false,
      linenos: false,
      'include css': false
    }))
    .pipe(concat('screen.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/styles'));
});

gulp.task('bundle', function(){
  return gulp.src('app/main.js')
    .pipe(jspm({selfExecutingBundle: true}))
    .pipe(rename("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

// Default gulp task to run
gulp.task('default', ['styl', 'bundle']);
