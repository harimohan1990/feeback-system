const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
