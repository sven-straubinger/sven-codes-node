var fs = require('fs');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

// Setup routes
var routeIndex = require('./routes/index');
var routeApi = require('./routes/api');

// Init app
var app = express();
app.use(express.static('public')); // Set static folder
app.use(cookieParser()); // Set cookie parser

// Route
app.use('/', routeIndex);
app.use('/api/individuals/*', routeApi);

// Init server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Listening on http://$s:%s", host, port)
})
