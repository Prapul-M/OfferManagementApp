require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const offerRoutes = require('./routes/offerRoutes');
const mongoose = require('mongoose');
const { updateDataExtension } = require('./utils/salesforceIntegration');

// Add this line before connecting to MongoDB
mongoose.set('strictQuery', false);

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

// Routes
app.use('/api/offers', offerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5001;  // This should now use 5001 from the .env file

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));