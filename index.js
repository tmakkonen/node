var server = require('./server');
var router = require('./router');
var handlers = require('./handlers');

var handle = {};
handle["/"] = handlers.root;
handle["/ip"] = handlers.ip;
handle["/client.js"] = handlers.root;

server.start(router.route, handle);
