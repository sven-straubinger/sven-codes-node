var path = require('path');
var express = require('express');

// Init router
var router = express.Router();

// GET frontpage
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve("index.html"));
});

module.exports = router;
