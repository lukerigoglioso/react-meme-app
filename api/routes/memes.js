//test file for route
// add to app.js file if you want to use
var express = require('express');
var router = express.Router();
var request = require('request');

 router.get('/', function(req, res, next) {

//old way - fisrt time dont hold too much pride on this
//   request({
//     uri: 'https://www.reddit.com/r/meme/new/.json'
//   }).pipe(res);

     var jsonResponse = {} ;

     var options = {
         method: 'GET',
         url: 'https://www.reddit.com/r/meme/new/.json',
     };
         request(options,function (error, response, body) {
             if (error) throw new Error(error);
             jsonResponse = JSON.parse(body);
             var childArray = jsonResponse.data.children;
             var urlArray = childArray.slice(0,childArray.length);
             jsonResponse = {urlArray}
             res.json(jsonResponse);
         });
 });

module.exports = router;




// object.jsonResponse.data.children[].data.url

// var colors = ['red', 'green', 'blue'];
// colors.forEach(function(color) {
//     console.log(color);
// });
// // red
// // green
// // blue