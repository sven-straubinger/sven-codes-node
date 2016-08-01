var fs = require('fs');
var path = require('path');
var express = require('express');

// Init router
var router = express.Router();

// GET request - frontpage
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve("views/frontpage.html"));
});

// GET request - robots.txt
router.get('/robots.txt', function(req, res, next) {
    fs.readFile(path.resolve("data/robots.txt"), "utf8", function(err, data) {
        res.header("Content-Type", "text/plain");
        res.end(data);
    });
});

// GET request - humans.txt
router.get('/humans.txt', function(req, res, next) {
    fs.readFile(path.resolve("data/humans.txt"), "utf8", function(err, data) {
        res.header("Content-Type", "text/plain");
        res.end(data);
    });
});

module.exports = router;
