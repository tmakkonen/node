var http = require('http');
var url = require('url');

var server;
var port = 3000;

function start(route, handle) { 
    http.createServer(function(req, res) {
        var path = url.parse(req.url).pathname;
        var query = url.parse(req.url).query;
        console.log("request received for " + path);
        route(handle, path, query, res);
    }).listen(port);
    console.log("server running at http://localhost:" + port);
}


exports.start = start;
