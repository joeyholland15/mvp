var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inventory');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'CONNECTION ERROR'));

db.once('open', function() {
  console.log("It works!");
})

module.exports = db; 
