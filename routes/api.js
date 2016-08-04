var fs = require('fs');
var path = require('path');
var express = require('express');
var underscore = require('underscore');

// Init router
var router = express.Router();

var filePath = "data/profiles.json";

// GET request - all profiles /api/profiles
router.get('/', function(req, res, next) {
    fs.readFile(path.resolve(filePath), "utf8", function(err, data) {
        res.header("Content-Type", "application/json");
        res.end(data);
    });
});

// GET request - profile for /api/profiles/:slug
router.get('/:slug', function(req, res, next) {
    var slug = req.params.slug;
    fs.readFile(path.resolve(filePath), "utf8", function(err, data) {
        arr = JSON.parse(data);

        // Find profile for slug
        var obj = underscore.find(arr, function (profile) {
            return profile.slug === slug;
        })

        // Return empty object, when no match was found
        obj = obj || {};

        // Send object
        res.header("Content-Type", "application/json");
        res.end(JSON.stringify(obj));
    });
});

module.exports = router;
