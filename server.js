var express = require('express');
var mongoose = require('mongoose');
var db = require('./config.js')
var Inventory = require('./inventory.js'); 
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());  

app.use(express.static('public'));

app.post('/api/inventory', function(req, res, next) {
  var myInventory = new Inventory({
    light: req.body.jacket
  })
  myInventory.save(function (err, jacket) {
    if (err) { return next(err) }
    res.json(201, jacket)
  })
});

app.get('/api/inventory', function(req, res, next) {
  Inventory.findOne({light: 'A\'s Letterman'}, function (err, jacket) {
  	if (err) return handleError(err);
  	res.json(200, jacket);
  	console.log('got here'); 
  })
})

app.listen(3000); 





