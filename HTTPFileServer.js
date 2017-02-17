var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filename = process.argv[3];
//console.log(process.argv[3]);
var server = http.createServer(function (req, res) {  
  res.writeHead(200, { 'content-type': 'text/plain' })
  var fileStream = fs.createReadStream(filename);
  // request handling logic...  
  fileStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    fileStream.pipe(res);
  });
  fileStream.on('error', function(err) {
    res.end(err);
  });
 
})
server.listen(port);