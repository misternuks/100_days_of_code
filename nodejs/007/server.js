import http from 'http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  //set default response header
  res.setHeader('Content-Type', 'text/plain');

  // Route handling
  if (method === 'GET' && url === '/' ) {
    res.writeHead(200);
    res.end('Welcome to the Home Page!');
  } else if (method === 'GET' && url === '/about') {
    res.writeHead(200);
    res.end('Welcome to the About Page!');
  } else if (method === 'GET' && url === '/contact') {
    res.writeHead(200);
    res.end('Welcome to the Contact Page!');
  } else if (method === 'POST' && url === '/submit') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(200);
      res.end(`Data received: ${body}`);
    })
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
