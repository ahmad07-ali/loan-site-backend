const app = require('./app'); // Import Express app from app.js
const http = require('http');

const PORT = process.env.PORT || 4000; // Default to 4000 if no .env

const server = http.createServer(app); // Create HTTP server with Express app

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Success log
});
