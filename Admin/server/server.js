import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/db.js'
import programRoutes from './routes/programRoutes.js'

dotenv.config()

const app = express();

app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Establish a connection to the MongoDB database
connectDB();

// Define the port where the server will listen (use the provided PORT or default to 5000)
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/program',programRoutes)

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
