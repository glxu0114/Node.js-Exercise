var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];
var map = require('through2-map');
var body = [];
//console.log(process.argv[3]);
var server = http.createServer(function (req, res) {  
  if (req.method !== 'GET') {
        return res.end('send me a GET\n')
  }
  var link = url.parse(req.url, true);
  if(link.pathname == '/api/parsetime')
  {
      var date = new Date(link.query.iso); // key: ios
      
      var time = {"hour" : date.getHours(), 
                  "minute" : date.getMinutes(),
                  "second" : date.getSeconds()
                 }
                 
      
  }
  else if(link.pathname == '/api/unixtime')
  {
      var date = new Date(link.query.iso); // key: ios
      
      var time = {"unixtime" : Math.floor(date.getTime()) }
      
  }
  if(time)
  {
      res.writeHead(200, { 'Content-Type': 'application/json' }); 
      res.write(JSON.stringify(time));
      res.end();
  }
  else
  {
      res.writeHead(404);  
      res.end();  
  }
  
})
server.listen(port);