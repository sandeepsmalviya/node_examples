var http = require('http');

var server = http.createServer(function(req, res) {
       console.log("request was made : " + req.url);
       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('request was made : '+ req.url);
});
server.listen(3000, '0.0.0.0');
console.log('server is listening at port 3000');