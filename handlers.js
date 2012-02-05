var fs = require('fs');
var util = require('util');

function root(res, path, query) {
    console.log("request handler '/'");
    if (path == '/') {
        path = "/index.html";
    }
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write("lol u fail");
            res.end();
        } else {
            res.writeHead(200, {'Content-Type' : contentType(path)});
            res.write(data, 'utf-8');
            res.end();
        }
    });
}

function ip(res, path, query) {
    console.log("request handler 'ip'");
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write(query);
    res.end();
}

function contentType(path) {
    if (path.match('.js$')) {
        return "text/javascript";
    }
    if (path.match('.css$')) {
        return "text/css";
    }
    if (path.match('.html$')) {
        return "text/html";
    }
}

exports.root = root;
exports.ip = ip;
