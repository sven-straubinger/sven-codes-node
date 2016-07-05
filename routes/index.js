var path = require('path');
var express = require('express');

// Init router
var router = express.Router();

// GET requests
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Sven codes' });
    res.sendFile(path.resolve("index.html"));
});

module.exports = router;
