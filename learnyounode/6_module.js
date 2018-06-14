var fs = require('fs');
var path = require('path');
module.exports = function (filename, extension, callback){
  extension = '.' + extension;
  fs.readdir(filename, cb);
  function cb(err, list){
    if(err){
      return callback(err);
    }
    var filtered = list.filter(function filfun(list){
      return extension == path.extname(list);
    })
    callback(null, filtered);
  }
}
