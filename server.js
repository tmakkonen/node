var http = require('http');
var url = require('url');
var fs = require('fs');
var util = require('util');

var server;
var port = 3000;

server = http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    if (path == '/') {
        path = '/index.html';
    }

    console.log("serving " + path)
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write("lol u fail");
            res.end();
        } else {
            res.writeHead(200, {'Content-Type' : contentType(path)})
            res.write(data, 'utf-8');
            res.end();
        }
    });
});

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

server.listen(port);
console.log("Server running at http://localhost:" + port);

