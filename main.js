/* Main.js – sven.codes */

// Init modules
var express = require('express');
var app = express();

// Define static folder
app.use(express.static('public'));

// Route for frontpage
app.get('/', function(req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

// Init server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Listening on http://$s:%s", host, port)
})
