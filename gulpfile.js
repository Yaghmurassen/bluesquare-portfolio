var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var vueify = require('gulp-vueify');

gulp.task('default', function(){

});

gulp.task('compile', function(){
    gulp.src('./public/sass/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
    gulp.watch('./public/sass/*.scss', ['compile','minify-css']);
});

gulp.task('minify-css', function(){
    return gulp.src('./public/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/dist/'));
});

gulp.task('build', function () {
    return gulp.src('./src/components/**/*.vue')
        .pipe(vueify())
        .pipe(gulp.dest('./dist'));
})


gulp.task('default', ['compile','watch']);
