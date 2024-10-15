const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import the routes for comic books
const comicBookRoutes = require('./routes/comicBookRoutes');

// Initialize the app
const app = express();
const port = 5000; // or any other port you prefer

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection (update with your MongoDB URL if needed)
mongoose.connect('mongodb://localhost:27017/comicStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Database connection error:', err);
});

// Define a basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Comic Store Backend API');
});

// Use the comic book routes (this adds the routes to handle /api/comics requests)
app.use('/api', comicBookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
