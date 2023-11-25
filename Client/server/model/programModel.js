import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  // Change 'programName' to 'name' to match the form data
  name: {
    type: String,
  },
  // Change 'eligibility' to 'sector' to match the form data
  sector: {
    type: String,
  },
  // Keep 'link' as it is, as it matches the form data
  link: {
    type: String,
  },
  annualElectricity: {
    type: String
  },
  employeeCount: {
    type: String
  },
  annualGasUsage: {
    type: String
  },
  // Change 'projectType' to 'location' to match the form data
  location: {
    type: String,
  },
  // Keep 'supportingDocs' as it is, as it matches the form data
  supportingDocs: {
    type: String,
  },
  // Change 'description' to 'description' to match the form data
  description: {
    type: String,
  },
});

const Program = mongoose.model('Program', programSchema);

export default Program;
