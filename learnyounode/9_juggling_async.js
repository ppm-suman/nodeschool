var http = require('http');
var bl = require('bl');
var data = [];
var count = 0;
function dataCollect(num){
  http.get(process.argv[num+2], callback).on("error", console.error);
  function callback(response){
    response.pipe(bl(function (err, res){
      if(err){
        return console.error(err);
      }
      data[num] = res.toString();
      count++;
      if(count == 3){
        for(var i = 0; i < 3; i++){
          console.log(data[i]);
        }
      }
    }));
  }
}
for(var i = 0; i < 3; i++){
  dataCollect(i);
}
