import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Use the MONGO_URI environment variable to connect to the MongoDB database
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo Connected');
  } catch (error) {
    // Handle any errors that occur during the database connection
    console.log('Error while connecting to the database', error);
    process.exit(1); // Exit the Node.js process with a non-zero exit code to indicate an error
  }
}


export default connectDB;