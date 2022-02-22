var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('kursi, 3 orang, biru, sandaran, dari kayu').to_json;

}).listen(8080);

console.log('Server is available at localhost:8080')
