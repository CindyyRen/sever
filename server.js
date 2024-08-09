import express from 'express';
import { data } from './db.js';
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Example POST route
app.get('/users', (req, res) => {
  res.json(data.users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
