// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a new route
// 4. Create a new route
// 5. Listen to the port

// Import express
const express = require('express');

// Create an express app
const app = express();

// Create a new route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Create a new route
app.get('/comments', (req, res) => {
  res.send('This is a comments page');
});

// Listen to the port
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
