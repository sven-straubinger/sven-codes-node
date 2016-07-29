var path = require('path');
var express = require('express');

// Init router
var router = express.Router();

// GET requests
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve("views/frontpage.html"));
});

module.exports = router;
