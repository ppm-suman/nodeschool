var mymodule = require('./6_module.js');
mymodule(process.argv[2], process.argv[3], callback);
function callback(err, data){
  if(err){
    console.log(err);
  }
  for(var i = 0; i < data.length; i++){
    console.log(data[i]);
  }
}
