// Import the 'express' module
import express from 'express';

// Import controller functions for handling contact operations
import {
  addNewContact,
  getContact,
  getContactWithID,
  updateContact,
  removeContact
} from '../controller/contactController.js';

// Create an Express Router instance
const router = express.Router();

// Define routes for various contact operations:

// Route: GET '/api/contacts'
// Description: Get a list of all contacts
router.get('/', getContact);

// Route: POST '/api/contacts'
// Description: Add a new contact
router.post('/', addNewContact);

// Route: GET '/api/contacts/:contactId'
// Description: Get a contact by its unique identifier (contactId)
router.get('/:contactId', getContactWithID);

// Route: PUT '/api/contacts/:contactId'
// Description: Update an existing contact by its unique identifier (contactId)
router.put('/:contactId', updateContact);

// Route: DELETE '/api/contacts/:contactId'
// Description: Remove an existing contact by its unique identifier (contactId)
router.delete('/:contactId', removeContact);

// Export the router for use in other parts of the application
export default router;
