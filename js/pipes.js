var http = require('http');
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/data.html', 'utf8');
var myReadStream = fs.createReadStream(__dirname + '/data.html');
var myWriteStream = fs.createWriteStream(__dirname + '/write.html');
myReadStream.pipe(myWriteStream);