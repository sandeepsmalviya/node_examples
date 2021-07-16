var http = require('http');
var fs = require('fs');
const { clear } = require('console');

var server = http.createServer(function (req, res) {

    console.log("request was made : " + req.url);

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res);        
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var myObj = {
            firstName: 'sandeep',
            lastName: 'malviya',
            age: 37
        };
        res.end(JSON.stringify(myObj));
    }else if(req.url.endsWith('.css')) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fs.createReadStream(__dirname + req.url).pipe(res); 
    } else if(req.url.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        fs.createReadStream(__dirname + req.url).pipe(res); 
    }else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('BAD_REQUEST');clear
    }

});

server.listen(3000, '0.0.0.0');
console.log('server is listening at port 3000');
