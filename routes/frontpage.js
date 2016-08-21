var fs = require('fs');
var path = require('path');
var express = require('express');

// Init router
var router = express.Router();

// GET - frontpage
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve("views/frontpage.html"));
});

// GET - robots.txt
router.get('/robots.txt', function(req, res, next) {
    fs.readFile(path.resolve("views/seo/robots.txt"), "utf8", function(err, data) {
        res.end(data);
    });
});

// GET - humans.txt
router.get('/humans.txt', function(req, res, next) {
    fs.readFile(path.resolve("views/seo/humans.txt"), "utf8", function(err, data) {
        res.end(data);
    });
});

// GET - browserconfig.xml
router.get('/browserconfig.xml', function(req, res, next) {
    fs.readFile(path.resolve("views/browserconfig.xml"), "utf8", function(err, data) {
        res.end(data);
    });
});

// GET - sitemap.xml
router.get('/sitemap.xml', function(req, res, next) {
    fs.readFile(path.resolve("views/seo/sitemap.xml"), "utf8", function(err, data) {
        res.end(data);
    });
});

module.exports = router;
