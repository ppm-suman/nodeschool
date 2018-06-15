var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');
module.exports = function(cmd, args){
  var proc = spawn(cmd, args);
  return duplexer(proc.stdin, proc.stdout);
};
