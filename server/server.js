require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const offerRoutes = require('./routes/offerRoutes');
const mongoose = require('mongoose');
const { updateDataExtension } = require('./utils/salesforceIntegration');
const path = require('path');

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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Serve static files from the images directory
app.use('/images', express.static(path.join(__dirname, '../client/src/images')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5001;  // This should now use 5001 from the .env file

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));