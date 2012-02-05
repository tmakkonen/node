function route(handle, path, query, response) {
    console.log("routing request for " + path);
        if (typeof(handle[path]) === 'function') {
        handle[path](response, path, query);
    } else {
        console.log("ERR: no handler for " + path);
        response.writeHead(404, {"Content-Type" : "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;
