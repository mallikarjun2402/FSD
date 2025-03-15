const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set default headers
  res.setHeader('Content-Type', 'text/plain'); // Default is plain text

  // Routing based on the URL
  if (req.url === '/' && req.method === 'GET') {
    // Serving an HTML response
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<h1>Welcome to the HTML Page</h1><p>This is an HTML response.</p>');
  } else if (req.url === '/text' && req.method === 'GET') {
    // Serving a plain text response
    res.statusCode = 200;
    res.end('This is a plain text response.');
  } else if (req.url === '/json' && req.method === 'GET') {
    // Serving a JSON response
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'This is a JSON response.' }));
  } else {
    // Handling 404 - Not Found
    res.statusCode = 404;
    res.end('Resource not found.');
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
