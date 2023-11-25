import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { FaLink, FaDollarSign, FaUser, FaMapMarkerAlt, FaBolt, FaInfoCircle } from 'react-icons/fa';
import axios from 'axios'; // Make sure to import axios

import Green from '../assets/green.gif'

const FundingForm = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    companySector: '',
    employeeCount: '',
    location: '',
    annualElectricityBudget: '',
    annualNaturalGasBudget: '',
  });

  const [programs, setProgram] = useState([])

  const [cookies, setCookie] = useCookies(['formData']);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sectors = ['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Other'];
  const employeeCounts = ['1-10', '11-50', '51-100', '101-500', '500+'];
  const locations = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories', 'Nunavut', 'Yukon'];
  const electricityBudgets = ['< $10,000', '$10,000 - $50,000', '$50,000 - $100,000', '$100,000+'];
  const naturalGasBudgets = ['< $5,000', '$5,000 - $20,000', '$20,000 - $50,000', '$50,000+'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      companySector: formData.companySector,
      employeeCount: formData.employeeCount,
      location: formData.location,
      annualElectricityBudget: formData.annualElectricityBudget,
      annualNaturalGasBudget: formData.annualNaturalGasBudget,
    };

    axios
      .post('http://localhost:5002/submitForm', data)
      .then((response) => {
        console.log(response);
        setProgram(response)
        setCookie('formData', response.data);
        setFormSubmitted(true);
        // Handle success, e.g., redirect to another page
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message to the user
      });
  };

  const handleClick = () => {
    navigate('/contact')
  }

  useEffect(() => {
    console.log('Cookies:', cookies);
    setProgram(cookies.formData)
    console.log(programs)
  }, [cookies]);


  return (
    <div>
      <div className="flex h-screen">
        <div className="w-1/2 p-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="companySector" className="block text-gray-700 text-sm font-bold mb-2">
                Company Sector:
              </label>
              <select
                id="companySector"
                name="companySector"
                value={formData.companySector}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
                required
              >
                <option value="" disabled>Select a sector</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="employeeCount" className="block text-gray-700 text-sm font-bold mb-2">
                Employee Count:
              </label>
              <select
                id="employeeCount"
                name="employeeCount"
                value={formData.employeeCount}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
                required
              >
                <option value="" disabled>Select an employee count</option>
                {employeeCounts.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Location:
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
                required
              >
                <option value="" disabled>Select a location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="annualElectricityBudget" className="block text-gray-700 text-sm font-bold mb-2">
                Annual Electricity Budget:
              </label>
              <select
                id="annualElectricityBudget"
                name="annualElectricityBudget"
                value={formData.annualElectricityBudget}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
                required
              >
                <option value="" disabled>Select a budget range</option>
                {electricityBudgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="annualNaturalGasBudget" className="block text-gray-700 text-sm font-bold mb-2">
                Annual Natural Gas Budget:
              </label>
              <select
                id="annualNaturalGasBudget"
                name="annualNaturalGasBudget"
                value={formData.annualNaturalGasBudget}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
                required
              >
                <option value="" disabled>Select a budget range</option>
                {naturalGasBudgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-800"
            >
              Submit
            </button>
          </form>

          <p className="text-sm text-yellow-600 border border-yellow-500 p-4 rounded shadow-md font-bold mt-4">
            You might be eligible for more funding schemes. Feel free to
            contact us or add yourself to our book of business. Please
            note that the results provided may not be 100% accurate.
          </p>

        </div>
        {!formSubmitted && (
          <div className="w-1/2 p-6">
            <img
              src = {Green}// Make sure to provide the correct path to your image
              alt="E2F Image"
              className="w-full h-auto"
            />
          </div>
        )}

        {formSubmitted && programs.length > 0 && (
          <div className="flex flex-wrap">
            {programs.map((program, index) => (
              <div key={index} className="p-4">
                <div className="bg-white border rounded shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  <h3 className="text-lg font-semibold mb-2">
                    {program.name || 'Not provided'}
                  </h3>
                  <p className="text-gray-700">
                    <FaUser className="inline-block mr-1" />
                    <strong>Company Sector:</strong> {program.sector || 'Not provided'}
                    <br />
                    <FaLink className="inline-block mr-1" />
                    <strong>Link:</strong> {program.link ? (
                      <a href={program.link} target="_blank" rel="noopener noreferrer">
                        {program.link}
                      </a>
                    ) : (
                      'Not provided'
                    )}
                    <br />
                    <FaMapMarkerAlt className="inline-block mr-1" />
                    <strong>Location:</strong> {program.location || 'Not provided'}
                    <br />
                    <FaInfoCircle className="inline-block mr-1" />
                    <strong>Description:</strong> {program.description || 'Not provided'}
                  </p>

                  <button
                    className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-800'
                    onClick={handleClick}>
                    learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>


    </div>
  );
};

export default FundingForm;