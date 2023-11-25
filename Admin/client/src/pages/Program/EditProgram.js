import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


import BackButton from '../../components/BackButton'

const EditProgram = () => {
  const [program, setProgram] = useState({
    name: '',
    location: '',
    annualElectricity: '',
    annualGasUsage: '',
    link: '',
    sector: '',
    description: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({
    name: '',
    location: '',
    annualElectricity: '',
    annualGasUsage: '',
    link: '',
    sector: '',
    description: '',
  });

  const handleChange = (name, value) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    axios
      .put(`http://localhost:5001/program/${id}`, input)
      .then((response) => {
        setIsLoading(false);
        setProgram(input);
        navigate(`/program`);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    try {
      setIsLoading(true);

      axios
        .get(`http://localhost:5001/program/${id}`)
        .then((response) => {
          setInput({
            name: response.data.name,
            location: response.data.location,
            link: response.data.link,
            annualElectricity: response.data.annualElectricity,
            annualGasUsage: response.data.annualGasUsage,
            sector: response.data.sector,
            description: response.data.description,
          });
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error('Error:', error);
        });
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center mb-4">
        <BackButton />
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Edit Program</h2>

        <div className="control no-margin">
          <label htmlFor="name">Program Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Please enter the program name"
            value={input.name}
            onChange={(event) => {
              handleChange('name', event.target.value);
            }}
            className="w-full border px-3 py-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="sector">Sector</label>
          <input
            id="sector"
            type="text"
            name="sector"
            placeholder="Please enter the sector of program"
            value={input.sector}
            onChange={(event) => {
              handleChange('sector', event.target.value);
            }}
            className="w-full border px-3 py-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="link">Link</label>
          <input
            id="link"
            type="url"
            name="link"
            placeholder="Please enter the link to program"
            value={input.link}
            onChange={(event) => {
              handleChange('link', event.target.value);
            }}
            className="w-full border px-3 py-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="location">Locations</label>
          <input
            id="location"
            type="text"
            name="location"
            placeholder="Please enter the location which is available"
            value={input.location}
            onChange={(event) => {
              handleChange('location', event.target.value);
            }}
            className="w-full border px-3 py-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="annualElectricity">Annual Electricity Usage</label>
          <input
            id="annualElectricity"
            type="number"
            name="annualElectricity"
            placeholder="Please enter the annual electricity usage range"
            value={input.annualElectricity}
            onChange={(event) => {
              handleChange('annualElectricity', event.target.value);
            }}
            className="w-full border px-3 py-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="annualGasUsage">Annual Gas Usage</label>
          <input
            id="annualGasUsage"
            type="number"
            name="annualGasUsage"
            placeholder="Please enter the annual gas usage range"
            value={input.annualGasUsage}
            onChange={(event) => {
              handleChange('annualGasUsage', event.target.value);
            }}
            className="w-full border px-3 py-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Please enter the description of the program"
            value={input.description}
            onChange={(event) => {
              handleChange('description', event.target.value);
            }}
            className="w-full border px-3 py-2 rounded shadow appearance-none focus:outline-none focus:shadow-outline-blue"
          />
        </div>


        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProgram;
