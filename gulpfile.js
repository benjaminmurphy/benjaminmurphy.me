(function() {
    "use strict";

    const gulp = require('gulp');
    const sass = require('gulp-sass');
    const remove = require('remove');

    const properties = require('./util/generate_layout');

    const libraries = ['node_modules/angular/angular.js',
                     'node_modules/angular-route/angular-route.js',
                     'node_modules/angular-cookies/angular-cookies.js',
                     'node_modules/normalize.css/normalize.css',
                     'node_modules/bootstrap/dist/css/bootstrap.css'];

    gulp.task('css', function () {
        return gulp.src('public/stylesheets/src/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('public/stylesheets/css'));
    });

    gulp.task('clean', function () {
        remove.removeSync('public/lib/*', { ignoreMissing: true });
        remove.removeSync('public/stylesheets/css/*.css', { ignoreMissing: true });
    });

    gulp.task('copy', function () {
        return gulp.src(libraries).pipe(gulp.dest('public/lib'))
    });

    gulp.task('layout', function() {
        properties('public/assets/layout.json');
    });

    gulp.task('default', ['clean', 'layout', 'copy', 'css'])

})()
