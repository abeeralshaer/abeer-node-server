
//utilities: General methodes throughout the website
//The querystring module provides utilities for parsing and formatting URL query strings
var qs = require('queryString');


function parseBody(req,callback) {
  var body = '';
  req.on('data', function(data) {
    body += data;
  });
  req.on('end', function() {
    callback(undefined,qs.parse(body));
  });
}

module.exports = {
  parseBody: parseBody
};
