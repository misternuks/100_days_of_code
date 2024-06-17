import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/about', (req, res) => {
  res.send('Welcome to the about page!');
});

app.get('/contact', (req, res) => {
  res.send('Welcome to the contact page!');
});

app.post('/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
