var through = require('through2');
var split = require('split');
var stream = through(write, end);
var odd = true;
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
function write(buffer, encoding, next){
  if(odd){
    this.push('\n'+buffer.toString().toLowerCase());
    odd = false;
  }
  else{
    this.push('\n'+buffer.toString().toUpperCase());
    odd = true;
  }
  next();
}
function end(done){
  done();
}
