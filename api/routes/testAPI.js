//test file for route
// add to app.js file if you want to use
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});
module.exports = router;
