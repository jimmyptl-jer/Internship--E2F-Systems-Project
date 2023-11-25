// Import the "Program" model from "../model/programModel.js"
import Program from '../model/programModel.js';

// Function to retrieve a list of programs
export const getPrograms = async (req, res, next) => {
  try {
    // Use the "Program" model to find all programs in the database
    const programs = await Program.find();

    // Respond with a 200 OK status and the list of programs as JSON
    res.status(200).json(programs);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the database' });
  }
};

// Function to create a new program
export const createProgram = async (req, res, next) => {
  const { name,
    location,
    employeeCount,
    annualElectricity,
    annualGasUsage,
    link,
    sector,
    description } = req.body;

  try {
    // Create a new "Program" instance with the request body data
    const program = await Program.create({
      name,
      location,
      employeeCount,
      annualElectricity,
      annualGasUsage,
      link,
      sector,
      description,
    });

    // Respond with a 201 Created status and the newly created program as JSON
    return res.status(201).json(program);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new program' });
  }
};

// Function to delete a program by its ID
export const deleteProgram = async (request, response) => {
  try {
    const { id } = request.params;

    // Use "await" to get the deleted program
    const results = await Program.findByIdAndDelete(id);

    // Check if the program was found and deleted
    if (!results) {
      return response.status(404).json({ message: 'No Program Found' });
    }

    // Respond with a 200 OK status and a success message
    return response.status(200).json({ message: 'Program Deleted Successfully' });

  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    console.log(error);
    response.status(500).send({ message: error.message });
  }
}

// Function to update a program by its ID
export const updateProgram = async (request, response) => {
  try {
    // Check if all required fields are provided in the request body
    if (!request.body.name || !request.body.sector || !request.body.link || !request.body.location || !request.body.description) {
      return response.status(400).json({ message: 'Invalid data' });
    }

    const { id } = request.params;

    // Find the program by ID and update its data
    const program = await Program.findByIdAndUpdate(id, request.body, { new: true });

    // Check if the program was found and updated
    if (!program) {
      return response.status(404).json({ message: 'No Program Found' });
    }

    // Respond with a 200 OK status and the updated program as JSON
    return response.status(200).json(program);
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response
    console.error(error);
    response.status(500).json({ message: 'Error updating program', error: error.message });
  }
};


export const getProgramsByID = async (request, response) => {
  try {
    const { id } = request.params

    const program = await Program.findById(id)

    return response.status(200).json(program)
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message })
  }
}