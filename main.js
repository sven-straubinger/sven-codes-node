/* Main.js – sven.codes */

// Init modules
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser')

// Init app
var app = express();
app.use(express.static('public')); // Set static folder
app.use(cookieParser()); // Set cookie parser

// Route frontpage
app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
    res.sendFile( __dirname + "/" + "index.html" );
})

// Route RESTful API
app.get('/api/individuals/*', function(req, res) {
    fs.readFile(__dirname + "/" + "individuals.json", "utf8", function(err, data) {
        res.header("Content-Type", "application/json");
        res.end(data);
    });
})

// Init server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Listening on http://$s:%s", host, port)
})
