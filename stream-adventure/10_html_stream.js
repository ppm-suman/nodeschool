var trumpet = require('trumpet');
var through = require('through2');
var tr =  trumpet();
var data = tr.select('.loud').createStream();
data.pipe(through (function(buffer, encoding, next){
  this.push(buffer.toString().toUpperCase());
  next();
})).pipe(data);
process.stdin.pipe(tr).pipe(process.stdout);
