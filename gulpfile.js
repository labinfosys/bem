'use strict';
const gulp     = require('gulp'),
      sass     = require('gulp-sass'),
      connect  = require('gulp-connect');

gulp.task('style', function () {
    return gulp.src('./style/main.scss')
            .pipe(sass({
                errLogToConsole: true,
                precision: 10
            }).on('error', sass.logError))
            .pipe(gulp.dest('./style'))
            .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch(['./style/*.scss'], ['style']);
    gulp.watch(['*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);