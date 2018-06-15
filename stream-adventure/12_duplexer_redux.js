var dup = require('duplexer2');
var thr = require('through2').obj;
module.exports = function (counter){
  var counts = {};
  var data = thr(write, end);
  return dup({objectMode: true}, data, counter);

  function write(buffer, encoding, next){
    counts[buffer.country] = (counts[buffer.country] || 0) + 1;
    next();
  }
  function end(done){
    counter.setCounts(counts);
    done();
  }
};
