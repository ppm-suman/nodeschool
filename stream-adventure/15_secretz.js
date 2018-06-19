var crypto = require('crypto');
  var tar = require('tar');
  var zlib = require('zlib');
  var concat = require('concat-stream');

  var parser = new tar.Parse();
  parser.on('entry', function (e) {
      if (e.type !== 'File') return e.resume()

      var h = crypto.createHash('md5', { encoding: 'hex' });
      e.pipe(h).pipe(concat(function (hash) {
          console.log(hash + ' ' + e.path);
      }));
  });
var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var zip = zlib.createGunzip();
process.stdin.pipe(decipher).pipe(zip).pipe(parser);
