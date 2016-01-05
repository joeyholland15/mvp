var mongoose = require('mongoose'); 
var db = require('./config')
//this is our inventory schema
var inventorySchema = mongoose.Schema({
  heavy: String,
  moderate: String,
  light: String
});

//this is our inventory model
var Inventory = mongoose.model('Inventory', inventorySchema); 

module.exports = Inventory; 