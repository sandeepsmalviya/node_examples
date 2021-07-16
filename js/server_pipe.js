var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    console.log("request was made : " + req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);

    //res.end();
});
server.listen(3000, '0.0.0.0');
console.log('server is listening at port 3000');
