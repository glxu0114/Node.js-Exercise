var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var map = require('through2-map');
var body = [];
//console.log(process.argv[3]);
var server = http.createServer(function (req, res) {  
  if (req.method !== 'POST') {
        return res.end('send me a POST\n')
  }
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString().toUpperCase();
    res.write(body);
    res.end();
  });
  
})
server.listen(port);