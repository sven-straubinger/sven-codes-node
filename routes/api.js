var fs = require('fs');
var path = require('path');
var express = require('express');

// Init router
var router = express.Router();

// GET requests
router.get('/', function(req, res, next) {
    fs.readFile(path.resolve("data/profiles.json"), "utf8", function(err, data) {
        res.header("Content-Type", "application/json");
        res.end(data);
    });
});

module.exports = router;
