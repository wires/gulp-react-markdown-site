var path = require("path");
var express = require('express');
var lazypipe = require('lazypipe');

var map = require("vinyl-map");
var gulp = require('gulp');
var $ = require("gulp-load-plugins")();

var build = {
    markdown: require("./src/build/markdown"),
    browserify: require("./src/build/browserify"),
    devserver: require("./src/build/httpserver")
};

// destination
var dest = lazypipe()
    .pipe(gulp.dest, './dist')
    .pipe($.size)
    .pipe($.livereload);

// process Markdown into JSON
gulp.task('markdown', function(){
    return gulp.src('content/markdown/*.md')
        // .pipe(build.markdown('content.json'))
        .pipe(gulp.dest('src/precompile/'));
});

// just copy the HTML
gulp.task('html', function() {
    return gulp.src("src/html/*.html")
        .pipe(dest());
});

// just copy the HTML
gulp.task('style', function() {
    return gulp.src("src/css/*.css")
        .pipe(dest());
});

// bundle and minify the JS
gulp.task('scripts', ['markdown'], function() {
    return build.browserify('src/js/index.js', 'bundle.js')
        .pipe(dest());
});

// copy images
gulp.task('images', function() {
    return gulp.src("content/images/*.png")
        .pipe(dest());
});

// full build
gulp.task('build', ['scripts', 'html', 'images', 'style']);

gulp.task('default', ['build'], function(){
    build.devserver({app_port: 5005});

    gulp.watch(['src/markdown/*.md'], ['markdown']);
    gulp.watch(['src/images/*.png'], ['images']);
    gulp.watch(['src/html/*.html'], ['html']);
    gulp.watch(['src/css/*.css'], ['style']);
    gulp.watch(['src/js/**/*.js'], ['scripts']);
});
