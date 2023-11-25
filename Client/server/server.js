// Import necessary modules and dependencies
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import a custom function to establish a connection to the MongoDB database
import connectDB from './config/db.js';

// Import route handlers for different resources
import programRoutes from './routes/programRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import subscribeRoutes from './routes/subscribeRoutes.js';
import formRoutes from './routes/formRoutes.js'

// Load environment variables from a .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
app.use(cors());


app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));


// Establish a connection to the MongoDB database using the 'connectDB' function
connectDB();

// Define the port where the server will listen (use the provided PORT from the environment or default to 5000)
const PORT = process.env.PORT || 5000;

// Set up middleware for parsing JSON and URL-encoded data in incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes for different resources by mounting the route handlers
app.use('/program', programRoutes);
app.use('/contact', contactRoutes);
app.use('/subscribe', subscribeRoutes);
app.use('/submitForm',formRoutes)

// Route: Handle the root URL ('/') with a simple response
app.get('/', (req, res, next) => res.send('Server is Ready'));

// Start the Express server, listening on the specified port
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
