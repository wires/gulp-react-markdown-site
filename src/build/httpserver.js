var $ = require("gulp-load-plugins");
var express = require("express");
var connectLR = require('connect-livereload');
var path = require("path");

// don't think this actually works
$.livereload.options.debug = true;

// quick and dirty live reload
module.exports = function asyncStartHTTP(opts) {
    
    var options = {
        ports: opts.ports || {app: 3004, livereload: r},
        rootPath: opts.rootPath || 'dist/',
        middlewares: opts.middlewares || []
    };

    // create random port for live-reload server
    var app_port = options.port || 3004;
    var livereload_port = options.lrPort || r;
    var r = Math.floor(Math.random()*10000) + 30000;

    function success(){
        console.log('App server started at http://localhost:' + ports.app,
            '\n\t~> wired to LR server http://localhost:' + ports.livereload);
    }

    // content
    var e = express()
        .use(connectLR({port: ports.livereload}))
        .use(express.static(path.resolve('dist/')));


        
        .use(upload)
        .listen(ports.app, );

    // livereload
    $.livereload.listen(ports.livereload);
};