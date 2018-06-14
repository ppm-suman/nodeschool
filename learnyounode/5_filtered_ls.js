var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var file_ext = '.' + process.argv[3];
fs.readdir(file, callback);
function callback(err, list){
  if(err){
    return console.log(err);
  }
  var filtered = list.filter(function filFun(name){
    return file_ext == path.extname(name);
  })
  for(var i = 0; i < filtered.length; i++){
    console.log(filtered[i]);
  }
}
