var express = require('express');
var app = express();
var request = require('request');
var range = require('range').range;

var  DESIGNERS_URL = 'http://www.grailed.com/api/designers/grailed';
var categories = ['tops', 'bottoms', 'outerwear', 'raw denim', 'footwear',
'accessories', 'suiting'];
var tops_sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
var bottoms_sizes = range(26, 44).map(stringifyNumbers);
var shoe_sizes = range(6, 13, 0.5).map(stringifyNumbers).concat(['13', '14']);
var accessories = ['ONE SIZE'].concat(range(26, 48, 2).map(stringifyNumbers));
var locations = [];

function stringifyNumbers(num) {
  return String(num);
}

function getDesigners() {
  request(DESIGNERS_URL, function (err, res, body) {
      if(!err) {
        var parsedResponse = JSON.parse(body);
        var data = JSON.stringify(parsedResponse['data'], null, 4);
        console.log('Data: ' + data);
      } else {
        console.log('Aw shit. Error: ' + err);
      }
    }
  );
}

app.get('/', function(req, res) {
  res.status(200).send('Ok');
  getDesigners();
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('We out here on port %s!', port);
});

module.exports = server;
