var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/test"); 

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'CONNECTION ERROR'));

db.once('open', function() {
  console.log("It works!");
})
var inventorySchema = mongoose.Schema({
  heavy: String,
  moderate: String,
  light: String
});

var Inventory = mongoose.model('Inventory', inventorySchema); 

module.exports = db; 