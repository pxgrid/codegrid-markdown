'use strict';

var gulp    = require('gulp');
var espower = require('gulp-espower');
var mocha   = require('gulp-mocha');

gulp.task('test', function() {
  gulp.src(['test/**/*.js'])
      .pipe(espower())
      .pipe(mocha());
});
