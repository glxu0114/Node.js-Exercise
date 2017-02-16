//module
/*var moduleFile = require('./mymodule.js');

moduleFile(process.argv[2], process.argv[3], function(err, data){
    data.forEach(function(file){
        console.log(file);
    });
});*/

//http request
const http = require("http");
var body = [];
http.get(process.argv[2], function(res)  {
  //console.log(process.argv[2]);
  
  // consume response body

  res.on('error', function(e) {
  console.log(`Got error: ${e.message}`);
  }).on('data', function(chunk) {
    body.push(chunk);
    //console.log(chunk);
  }).on('end', function() {
    body.forEach(function(file){
      console.log(file.toString('utf8'));
    })
  });
});