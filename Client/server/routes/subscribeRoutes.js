// Import the 'express' module
import express from 'express';

// Import a controller function for handling subscriptions
import { addNewSubscribe } from '../controller/subscribeController.js';

// Create an Express Router instance
const router = express.Router();

// Define the route for handling subscriptions and associate it with the 'createSubscribe' controller function:

// Route: POST '/api/subscribe'
// Description: Create a new subscription
router.post('/', addNewSubscribe);

// Export the router for use in your main application
export default router;
