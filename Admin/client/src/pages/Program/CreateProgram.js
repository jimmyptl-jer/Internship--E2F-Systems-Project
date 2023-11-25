import React, { useState } from 'react';
import axios from 'axios';
import BackButton from '../../components/BackButton';
import { useNavigate } from 'react-router-dom';
import { FaRegBuilding, FaLink, FaIndustry, FaFileAlt, FaUsers, FaBolt, FaGasPump } from 'react-icons/fa';

const CreateProgram = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    employeeCount: '',
    annualElectricity: '',
    annualGasUsage: '',
    link: '',
    sector: '',
    description: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      location: formData.location,
      employeeCount: formData.employeeCount,
      annualElectricity: formData.annualElectricity,
      annualGasUsage: formData.annualGasUsage,
      link: formData.link,
      sector: formData.sector,
      description: formData.description,
    };

    axios
      .post('http://localhost:5001/program', data)
      .then((response) => {
        console.log(response);
        navigate('/program');
      })
      .catch((error) => {
        setError('Sorry, something went wrong. Please try again.');
        console.error(error);
      });
  };

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <BackButton />

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Add New Program</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Program Name
          </label>
          <div className="flex items-center">
            <FaRegBuilding className="text-gray-500 mr-2" />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter the program name"
              value={formData.name}
              onChange={(event) => {
                handleChange('name', event.target.value);
              }}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="sector" className="block text-gray-700 text-sm font-bold mb-2">
            Sector
          </label>
          <div className="flex items-center">
            <FaIndustry className="text-gray-500 mr-2" />
            <select
              id="sector"
              name="sector"
              value={formData.sector}
              onChange={(event) => {
                handleChange('sector', event.target.value);
              }}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
            >
              <option value="" disabled>Select a sector</option>
              {['Technology', 'Finance', 'Healthcare', 'Manufacturing', 'Other'].map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="link" className="block text-gray-700 text-sm font-bold mb-2">
            Link
          </label>
          <div className="flex items-center">
            <FaLink className="text-gray-500 mr-2" />
            <input
              id="link"
              type="url"
              name="link"
              placeholder="Enter the link to the program"
              value={formData.link}
              onChange={(event) => {
                handleChange('link', event.target.value);
              }}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <div className="flex items-center">
            <FaFileAlt className="text-gray-500 mr-2" />
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={(event) => {
                handleChange('location', event.target.value);
              }}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
            >
              <option value="" disabled>Select Location</option>
              {[
                'Alberta',
                'British Columbia',
                'Manitoba',
                'New Brunswick',
                'Newfoundland and Labrador',
                'Nova Scotia',
                'Ontario',
                'Prince Edward Island',
                'Quebec',
                'Saskatchewan',
                'Northwest Territories',
                'Nunavut',
                'Yukon',
              ].map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="annualElectricity" className="block text-gray-700 text-sm font-bold mb-2">
            Annual Electricity Budget
          </label>
          <div className="flex items-center">
            <FaBolt className="text-gray-500 mr-2" />
            <select
              id="annualElectricity"
              name="annualElectricity"
              value={formData.annualElectricity}
              onChange={(event) => {
                handleChange('annualElectricity', event.target.value);
              }}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
            >
              <option value="" disabled>Select Electricity Budget</option>
              {['< $10,000', '$10,000 - $50,000', '$50,000 - $100,000', '$100,000+'].map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="employeeCount" className="block text-gray-700 text-sm font-bold mb-2">
            Employee Count
          </label>
          <div className="flex items-center">
            <FaUsers className="text-gray-500 mr-2" />
            <select
              id="employeeCount"
              name="employeeCount"
              value={formData.employeeCount}
              onChange={(event) => {
                handleChange('employeeCount', event.target.value);
              }}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
            >
              <option value="" disabled>Select employee count</option>
              {['1-10', '11-50', '51-100', '101-500', '500+'].map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="annualGasUsage" className="block text-gray-700 text-sm font-bold mb-2">
            Annual Natural Gas Budget
          </label>
          <div className="flex items-center">
            <FaGasPump className="text-gray-500 mr-2" />
            <select
              id="annualGasUsage"
              name="annualGasUsage"
              value={formData.annualGasUsage}
              onChange={(event) => {
                handleChange('annualGasUsage', event.target.value);
              }}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
            >
              <option value="" disabled>Select Natural Gas Budget</option>
              {['< $5,000', '$5,000 - $20,000', '$20,000 - $50,000', '$50,000+'].map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <div className="flex items-center">
            <FaFileAlt className="text-gray-500 mr-2" />
            <input
              id="description"
              type="text"
              name="description"
              placeholder="Enter the description of the program"
              value={formData.description}
              onChange={(event) => {
                handleChange('description', event.target.value);
              }}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
            />
          </div>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <p className="form-actions">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-800"
          >
            Submit
          </button>
        </p>
      </form>
    </div>
  );
};

export default CreateProgram;
