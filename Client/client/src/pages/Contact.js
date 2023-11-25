import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaBuilding, FaPhone } from 'react-icons/fa';

import contact from '../assets/contact.jpg';

const ContactForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5002/contact', formData);
      navigate('/');
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Side Image */}
      <div className="max-w-screen-xl flex w-full bg-gray-100 rounded shadow-md overflow-hidden">
        <div className="w-1/2 p-6">
          <img src={contact} alt="Contact" className="h-full w-full object-cover" />
        </div>
      

      {/* Contact Form */}
      <div className="max-w-md w-full p-6">
        <h2 className="text-3xl font-semibold mb-6 text-green-500">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              <FaUser className="inline-block mr-2" />
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
              placeholder="John"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              <FaUser className="inline-block mr-2" />
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
              placeholder="Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              <FaEnvelope className="inline-block mr-2" />
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">
              <FaBuilding className="inline-block mr-2" />
              Company:
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
              placeholder="ABC Corporation"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              <FaPhone className="inline-block mr-2" />
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
              placeholder="555-1234"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-800"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ContactForm;
