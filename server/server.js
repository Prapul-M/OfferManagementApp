require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const offerRoutes = require('./routes/offerRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/offers', offerRoutes);

const PORT = process.env.PORT || 5001;  // This should now use 5001 from the .env file

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));