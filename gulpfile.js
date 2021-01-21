'use strict';

var gulp    = require('gulp');
var espower = require('gulp-espower');
var mocha   = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src(['test/**/*.js'])
      .pipe(espower())
      .pipe(mocha());
});

gulp.task('test:watch', function() {
  return gulp.watch(['test/**/*.js', 'lib/**/*.js'], function() {
    return gulp.src(['test/**/*.js'])
        .pipe(espower())
        .pipe(mocha());
  });
});
