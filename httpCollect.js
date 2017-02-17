
const https = require("https");
var body = [];
https.get(process.argv[2], function(res)  {
  //console.log(process.argv[2]);
  
  // consume response body
  res.setEncoding('utf8');
  res.on('error', function(e) {
  console.log(`Got error: ${e.message}`);
  }).on('data', function(chunk) {
    body += chunk;
    //console.log(chunk);
  }).on('end', function() {
     console.log(body.length);
     console.log(body);

  });
});