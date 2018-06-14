function foo(){
  var bar;
  quux = 6;
  function zip(){
    var quux = 10;
    bar = true;
  }
  return zip;
}
