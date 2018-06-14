var fs = require('fs');
var http = require('http');
var server = http.createServer(callback);
function callback(req, res){
  fs.createReadStream(process.argv[3]).pipe(res);
}
server.listen(process.argv[2]);
