var map = require("vinyl-map");
var lazypipe = require("lazypipe");

// var $ = require("gulp-load-plugins");
var $ = {
    markdownToJson: require("gulp-markdown-to-json"),
    util: require("gulp-util")
};

var R = /<p>[\s\S]*?<\/p>/ig;
var RE = /<p>([\s\S]*?)<\/p>/i;

function splitParagraphs(s){
    return s.match(R).map(function(ss){
        return ss.match(RE)[1];
    });
}

module.exports = function(targetFile) {
    return lazypipe()
        .pipe($.util.buffer)
        .pipe($.markdownToJson, targetFile)
        .pipe(map, function(json){
            // parse file content
            var content = JSON.parse(json.toString());

            // modify JSON object
            for (var filename in content) {
                var b = content[filename];
                var bs = splitParagraphs(b.body);
                console.log(b.title, "=>", bs.length, "paragraphs");
                b.body = bs;
            }

            // write back
            return JSON.stringify(content);
        });
};
