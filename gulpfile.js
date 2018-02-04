var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    gs = require('gulp-selectors'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function () {
    return gulp.src('assets/scss/style.scss')
        .pipe(sass({
            precision: 8,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['>1%'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('watch', ['styles'], function() {
    gulp.watch('assets/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles']);