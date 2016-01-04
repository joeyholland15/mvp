var http = require('http');

var fs = require('fs');

var port = 3000;

var ip = '127.0.0.1';

var server = http.createServer(function(req, res) {
  if(req.method === 'GET') {
  	//be able to serve all static files. 
  }
})