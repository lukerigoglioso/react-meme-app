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
             console.debug(jsonResponse.data);

             var dataUrlObject = {} ;
             jsonResponse.data.children.forEach(function (x) {
                 dataUrlObject[x.data.url] = x ;
                 console.debug(x);
             });
             console.log(dataUrlObject)
             res.json({dataUrlObject})
         });

 });

// var byId2 = {};
// data.benefitsList.forEach(function (x) {
//     byId2[x.benlistCodeCd] = x;
// });

module.exports = router;




// object.jsonResponse.data.children[].data.url