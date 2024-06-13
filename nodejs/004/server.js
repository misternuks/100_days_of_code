const http = require('http'); //Imports the http module

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set response header with status code 200 (OK) & content type text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain '});

  // Send 'Hello World!' as the response body
  res.end('Hello World!');
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
