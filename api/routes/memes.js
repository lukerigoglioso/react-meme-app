//test file for route
// add to app.js file if you want to use
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request({
    uri: 'https://www.reddit.com/r/meme/new/.json'
  }).pipe(res);
});
module.exports = router;
