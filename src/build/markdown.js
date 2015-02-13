var lazypipe = require('lazypipe');

var markdownToJson = require('gulp-markdown-to-json');
var util = require('gulp-util');
var map = require('vinyl-map');
var _ = require('lodash');

var R = /<p>[\s\S]*?<\/p>/ig;
var RE = /<p>([\s\S]*?)<\/p>/i;

function splitParagraphs(s){
    return (s.match(R) || []).map(function(ss){
        return ss.match(RE)[1];
    });
}

var splitter = function(json) {
    // parse file content
    var content = JSON.parse(json.toString());

    // modify JSON object
    for (var filename in content) {
        var b = content[filename];
        var bs = splitParagraphs(b.body);
        console.log(b.title, '=>', bs.length, 'paragraphs');
        b.body = bs;
    }

    // write back
    return JSON.stringify(content);
}

module.exports = function(targetFile) {
    return lazypipe()
        .pipe(util.buffer)
        .pipe(markdownToJson, targetFile)
        .pipe(map, function(json){
            var content = JSON.parse(json.toString());

            // we receive dict like `{filename: {body:'<htm..', title:..}}`
            // want to lowercase the filenames
            var lowerCasedKeys = _(content)
                .transform(function(accum, value, key){
                    accum[key.toLowerCase()] = value;
                }, {})
                .value();

            return JSON.stringify(lowerCasedKeys);
        });
};
