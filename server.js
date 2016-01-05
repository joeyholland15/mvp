var express = require('express');
var mongoose = require('mongoose');
var db = require('./config.js')
var Inventory = require('./inventory.js'); 

Inventory.create({ heavy: 'green jacket', moderate: 'striped jacked', light: 'green shorts' }, function (err, results) {
  if (err) return handleError(err);
})

var app = express();

app.use(express.static('public'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});





