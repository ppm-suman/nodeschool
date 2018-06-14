var fs = require('fs');
var line = undefined;
fs.readFile(process.argv[2], callback);
function callback(err, contents){
  line = contents.toString().split('\n').length - 1;
  console.log(line);
}
