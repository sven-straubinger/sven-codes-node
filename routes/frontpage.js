var path = require('path');
var express = require('express');

// Init router
var router = express.Router();

// GET requests
router.get('/', function(req, res, next) {
    // res.render('frontpage', { title: 'Sven codes' });
    res.sendFile(path.resolve("frontpage.html"));
});

module.exports = router;
