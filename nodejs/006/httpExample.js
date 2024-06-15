const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  //Set the response header with status code 200 and content type text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send 'Hello, world!' as the response body
  res.end('Hello, world!\n');
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
