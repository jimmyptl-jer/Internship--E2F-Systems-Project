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


// export const submitForm = async (req, res) => {
//   try {
//     // Get form data from the request body
//     const formData = req.body;

//     // Build your filter based on form data
//     const filter = {
//       sector: formData.companySector,
//       location: formData.location,
//       annualElectricity: { $gte: getBudgetRange(formData.annualElectricityBudget) },
//       annualGasUsage: { $gte: getBudgetRange(formData.annualNaturalGasBudget) },
//     };

//     if (formData.employeeCount) {
//       // Extract min and max values from the employeeCount range
//       const [min, max] = formData.employeeCount.split('-').map(Number);
//       filter.employeeCount = { $gte: min, $lte: max };
//     }

//     // Perform database query with the filter
//     const result = await Program.find(filter);
//     console.log(result);

//     // Send the filtered data as the response
//     res.json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// };

// // Helper function to convert budget range string to an array [min, max]
// const getBudgetRange = (budgetString) => {
//   const [min, max] = budgetString.split('-').map((value) => parseFloat(value.replace(/[^0-9.-]/g, '')));
//   return min; // For simplicity, assuming the budget is a single value (minimum value)
// };

export const submitForm = async (req, res) => {
  try {
    // Get form data from the request body
    const formData = req.body;

    // Build your filter based on form data
    const filter = {
      sector: formData.companySector,
      employeeCount: formData.employeeCount,
      location: formData.location,
      annualElectricity: formData.annualElectricityBudget,
      annualGasUsage: formData.annualNaturalGasBudget,
    };

    // Perform database query with the filter
    const result = await Program.find(filter);
    console.log(result)

    // Send the filtered data as the response
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};