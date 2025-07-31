// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Apply secure HTTP headers
app.use(helmet());

// Sanitize against XSS attacks
app.use(xss());

// Sanitize against NoSQL injection
app.use(mongoSanitize());

// Limit incoming JSON payload size
app.use(express.json({ limit: '10kb' }));

// Global API rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                  // Max 100 requests per IP
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', apiLimiter);

// Login-specific brute-force protection limiter
const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,  // 10 minutes
  max: 5,                    // Only 5 login attempts per IP
  message: {
    error: "Too many login attempts. Try again later.",
  },
});
app.use('/api/users/login', loginLimiter);

// Routes
app.use('/api/users', userRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection failed:', err.message);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});
