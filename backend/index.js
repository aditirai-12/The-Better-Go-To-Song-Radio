// backend/index.js
const express = require('express');
const app = express();
const port = 8888;

app.get('/api', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
