var concat = require('concat-stream');
var concatStream = concat(reverse);
process.stdin.pipe(concatStream)//.pipe(process.stdout);
function reverse(allBuffer){
  console.log(allBuffer.toString().split('').reverse().join(''));
}
