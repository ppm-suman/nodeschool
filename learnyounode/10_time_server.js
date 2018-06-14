var net = require('net');
var server = net.createServer(function (socket){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = ('0' + month).slice(-2);
  var day = date.getDate();
  day = ('0' + day).slice(-2);
  var hour = date.getHours();
  var min = date.getMinutes();
  min = ('0' + min).slice(-2);
  socket.write(year+'-'+month+'-'+day+' '+hour+':'+min+'\n');
  socket.end();
});
server.listen(process.argv[2]);
