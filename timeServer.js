var net = require('net')  
var server = net.createServer(function (socket) { 
        var date = new Date();
        //"YYYY-MM-DD hh:mm"  
        var month =  (date.getMonth()+1 < 9 ? "0" : "") + (date.getMonth() + 1);
        var day  = (date.getDate() < 9 ? "0" : "") + date.getDate();
        var hour  = (date.getHours() < 9 ? "0" : "") + date.getHours();
        var min  = (date.getMinutes() < 9 ? "0" : "") +  date.getMinutes();
        socket.end(date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + min + "\n");
       // socket handling logic  
})  
server.listen(process.argv[2]); 
     