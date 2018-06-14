var http = require('http');
http.get(process.argv[2], callback).on("error", console.error);
function callback(response){
  response.setEncoding('utf8');
  response.on("data", console.log);
  response.on("error", console.error);
}
