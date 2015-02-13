var map = require("vinyl-map");
var lazypipe = require("lazypipe");

// var $ = require("gulp-load-plugins");
var $ = {
    markdownToJson: require("gulp-markdown-to-json"),
    util: require("gulp-util")
};

function splitParagraphs(s){
    var r = /<p>[\s\S]*?<\/p>/ig;
    var re = /<p>([\s\S]*?)<\/p>/i;

    return s.match(r).map(function(ss){
        return ss.match(re)[1];
    });
}

module.exports = function(target) {
    return lazypipe()
        .pipe($.util.buffer)
        .pipe($.markdownToJson, target)
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