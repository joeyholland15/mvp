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
  myInventory.save(function (err, inventory) {
    if (err) { return next(err) }
    res.json(201, inventory)
  })
});

app.listen(3000); 





