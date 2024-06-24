import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Middleware to serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Static Files Example!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost.${PORT}`);
});
