const http = require('http');

const server = http.createServer((req, res) => {
  // Without the following line, the response will hang.
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(3000);