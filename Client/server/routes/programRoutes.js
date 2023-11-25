// Import the 'express' module
import express from 'express';

// Import controller functions for managing programs
import {
  getPrograms,
} from '../controller/programController.js';

// Create an Express Router instance
const router = express.Router();

// Define the routes for program management and associate them with the corresponding controller functions:

// Route: GET '/api/programs'
// Description: Retrieve a list of all programs
router.get('/', getPrograms);

// Export the router for use in the main application
export default router;
