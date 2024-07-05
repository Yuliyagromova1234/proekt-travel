'use strict';

const less = require('gulp-less');
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

exports.less = function () {
    return gulp.src('./css/style.less')
        .pipe(concat('main-style.css'))
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));

}

// const less = require('gulp-less')(require('less'));
// const gulp = require('gulp');
// const cleanCss = require('gulp-clean-css');
// const rename = require('gulp-rename');
// const concatCss = require('gulp-concat-css');
//
// exports.less = function () {
//     return gulp.src('./css/style.less')
//         .pipe(concatCss('main-style.css'))
//         .pipe(less().on('error', less.logError))
//         .pipe(cleanCss())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('./dist'));
//
// }



// exports.watch = function () {
//     return gulp.watch('./css/*.less', gulp.series('less'));
// };