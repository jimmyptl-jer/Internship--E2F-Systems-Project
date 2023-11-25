// Import the 'express' module
import express from 'express';

// Import controller functions for managing programs
import {
  createProgram,
  getPrograms,
  deleteProgram,
  updateProgram,
  getProgramsByID
} from '../controller/programController.js';

// Create an Express Router instance
const router = express.Router();

// Define the routes for program management and associate them with the corresponding controller functions:

// Route: POST '/api/programs'
// Description: Create a new program
router.post('/', createProgram);

// Route: GET '/api/programs'
// Description: Retrieve a list of all programs
router.get('/', getPrograms);

router.get('/:id',getProgramsByID)

// Route: DELETE '/api/programs/:id'
// Description: Delete a program by its unique identifier (id)
router.delete('/:id', deleteProgram);

// Route: PUT '/api/programs/:id'
// Description: Update an existing program by its unique identifier (id)
router.put('/:id', updateProgram);

// Export the router for use in the main application
export default router;
