var ws =  require('websocket-stream');
var stream = ws('ws://localhost:8099');

var str = require('string-to-stream');
str('hello\n').pipe(stream);
//or just simply
stream.write('hello\n');
