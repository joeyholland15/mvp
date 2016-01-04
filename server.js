var http = require('http');

var fs = require('fs');

var port = 3000;

var ip = '127.0.0.1';

var server = http.createServer(function(req, res) {
  console.log("Serving " + req.method + "request for " + req.url); 
  if(req.method === 'GET') {
  	//be able to serve all static files. 
  	if(req.url === '/') {
  	  fs.readFile('index.html', 'utf8', function(err, data) {
  	  	res.writeHead(200, {'Content-type': 'text/html'});
  	  	res.end(data); 
  	  })
  	} else {
  	  fs.readFile(req.url, 'utf8', function(err, data) {
        res.writeHead(200, {'Content-type': 'text/html'});
        if(data) {
          res.write(data)
        }
        res.end();  
  	  })
    }
  }
});

server.listen(port, ip); 