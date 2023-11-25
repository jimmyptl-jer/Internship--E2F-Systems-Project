// Import the 'mongoose' module to work with MongoDB
import mongoose from "mongoose";

// Create a Mongoose schema for the "Subscribe" entity
const subscribeSchema = new mongoose.Schema({
  // Define the 'email' field with the data type 'String' and mark it as required and unique
  email: {
    type: String,
    required: true, // It is required, meaning every subscription document must have an email.
    unique: true, // It enforces that email addresses must be unique among subscriptions.
  },
  // Define the 'createAt' field with the data type 'Date' and a default value of the current date and time when a new subscription is created
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a Mongoose model named "Subscribe" using the defined schema
const Subscribe = mongoose.model('Subscribe', subscribeSchema);

// Export the "Subscribe" model to make it available for use in other parts of the application
export default Subscribe;
