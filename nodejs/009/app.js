import express from 'express';

const app = express();
const PORT = 3000;

// Middleware function to log request details
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Middleware function to simulate authentication
const authenticate = (req, res, next) => {
  const auth = req.headers['authorization'];
  if (auth) {
    console.log('User authenticated.');
    next();
  } else {
    res.status(401).send('Unauthorized.');
  }
};

// Use the requestLogger middleware globally
app.use(requestLogger);

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
  res.send('Welcome to the about page!');
});

//Use the authenticate middleware for the /secure rout
app.get('/secure', authenticate, (req, res) => {
  res.send('Welcome to the secure page!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
