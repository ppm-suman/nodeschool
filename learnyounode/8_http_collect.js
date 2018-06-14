var http = require('http');
var bl = require('bl');
http.get(process.argv[2], callback).on("error", console.error);
function callback(data){
  data.pipe(bl(function (err, data){
    if(err){
      return console.log(err);
    }
    var str = data.toString();
    console.log(str.length);
    console.log(str);
  }));
}
