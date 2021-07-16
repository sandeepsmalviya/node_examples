var http = require('http');
var fs = require('fs');

//var myReadStream = fs.createReadStream(__dirname + '/data.html');
var myReadStream = fs.createReadStream(__dirname + '/data.html', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.html ');

myReadStream.on('data', function (chunk)  {
    console.log('new chunk received : ');    
    myWriteStream.write(chunk);
});  