/* Hello World Programm */

var http = require('http');

http.createServer(function(request, res) {
    // Send the HTTP header
    // HTTP Status: 200: OK
    // Content-Type: text-plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body as "Hello World"
    res.end('Hello sven.codes webpage.\n')
}).listen(8081)

console.log('Server running at http://localhost:8081/');
