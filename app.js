const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('./database/connection'); // must successfully connect MongoDB

const app = express(); // ✅ declared at the top
require('dotenv').config(); // Must be at top


// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://newloan-site.vercel.app', 'http://quickcashpoint.com'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const loanRoutes = require('./Routes/LoanRoute');
app.use('/LoanApplications', loanRoutes);

const msgRoute = require('./Routes/msgRoute');
app.use('/Message', msgRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
