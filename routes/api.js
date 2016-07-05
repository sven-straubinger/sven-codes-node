var fs = require('fs');
var path = require('path');
var express = require('express');

// Init router
var router = express.Router();

// GET API
router.get('/', function(req, res, next) {
    fs.readFile(path.resolve("individuals.json"), "utf8", function(err, data) {
        res.header("Content-Type", "application/json");
        res.end(data);
    });
});

module.exports = router;
