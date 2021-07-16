var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    console.log("request was made : " + req.url);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myObj = {
        firstName:'sandeep',
        lastName:'malviya',
        age:37
    };

    res.end(JSON.stringify(myObj));

});

server.listen(3000, '0.0.0.0');
console.log('server is listening at port 3000');
