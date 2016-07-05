/* Main.js – sven.codes */

// Modules
var http = require('http');
var fs = require('fs');
var url = require('url');

// Constants
var Port = 8081;
var ContentTypeHtml = {'Content-Type': 'text/html'};

// Server
http.createServer(function(request, response) {
    // Parse request
    var pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");

    fs.readFile(pathname.substr(1), function(err, data){
        if(err) {
            response.writeHead(404, ContentTypeHtml);
            response.write("Not found.");
        } else {
            response.writeHead(200, ContentTypeHtml);
            response.write(data.toString());
        }
        response.end();
    });

}).listen(Port)

console.log('Server running at http://localhost:' + Port + '/');
