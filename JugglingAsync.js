
const http = require("http");
var body = '';
var array = [];
var count = 0;
function gethttp(index){
http.get(process.argv[2+index], function(res)  {
  //console.log(process.argv[2]);
  
  // consume response body
  res.setEncoding('utf8');
  res.on('error', function(e) {
  console.log(`Got error: ${e.message}`);
  });
  body = '';
  res.on('data', function(chunk) {
    body += chunk;
    //console.log(chunk);
  });
  res.on('end', function() {
      array[index] = body;
      count++;
      if(count >= 3)
      {
          for( var i in array)
          {
              console.log(array[i]);
          }
      }
      //console.log(array[index]);

  });

  
});
}

for (var i = 0; i < 3; i++)
{
    gethttp(i);
    
}
