const app = require('./app');
const http = require('http');

// Use port 80 for cPanel (or .env fallback)
const PORT = process.env.PORT || 80; // cPanel prefers port 80/443

const server = http.createServer(app);

server.listen(PORT, '0.0.0.0', () => { // Listen on all network interfaces
  console.log(`Server running on port ${PORT}`);
});

// Handle uncaught errors (critical for production)
process.on('uncaughtException', (err) => {
  console.error('⚠️ Uncaught Exception:', err.stack);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server gracefully terminated');
  });
});