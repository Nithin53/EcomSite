// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Port number
const port = 3000;

// Route handler for GET request to the root path '/'
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Starting the server on specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
