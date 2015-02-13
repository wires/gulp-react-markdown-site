var path = require("path");
var express = require('express');
var lazypipe = require('lazypipe');

var map = require("vinyl-map");
var gulp = require('gulp');
var $ = require("gulp-load-plugins")();

var server = require("./src/build/server")

gulp.task('build', ['scripts', 'html', 'images', 'svg'])

gulp.task('default', ['build'], function(){
    asyncStartHTTP();
    gulp.watch(['src/markdown/*.md'], ['markdown']);
    gulp.watch(['src/images/*.png'], ['images']);
    gulp.watch(['src/html/*.html'], ['html']);
    gulp.watch(['src/js/**/*.js'], ['scripts']);
    gulp.watch(['src/svg/*.svg'], ['svg']);
});

// destination
var dest = lazypipe()
    .pipe(gulp.dest, './dist')
	.pipe($.size)
    .pipe($.livereload);

// gulp.task('svg', function() {
//     return gulp.src("src/svg/*.svg")
// 		.pipe(dest());
// })
// 
// gulp.task('images', function() {
//     return gulp.src("src/images/*.png")
//     .pipe(dest());
// })

gulp.task('html', function() {
    return gulp.src("src/html/*.html")
        .pipe(dest());
})

gulp.task('markdown', function(){
    return gulp.src('src/markdown/*.md')
        .pipe(build.markdown('content.json'))
        .pipe(gulp.dest('src/precompile/'))
});

gulp.task('scripts', ['precompile', 'markdown'], function() {
    return build.browserify('src/js/index.js', 'bundle.js')
        .pipe(dest());
});
