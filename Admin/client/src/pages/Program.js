import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { AiOutlineEdit, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const url = 'http://localhost:5001/program';

const Program = () => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong 404');
      }

      const data = await response.json();

      console.log(data);
      setPrograms(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8 px-4">
      <BackButton />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Project List</h1>
        <Link to="/program/create">
          <MdAdd className="text-sky-800 text-4xl hover:text-black" />
        </Link>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {programs.length > 0 ? (
            programs.map((program, index) => (
              <div
                key={program._id}
                className="border p-4 rounded-md shadow-md bg-white transition duration-300 ease-in-out transform hover:scale-105"
              >
                <h2 className="text-xl font-bold mb-2">Program Name:</h2>
                <p className="text-gray-700 mb-2">{program.name}</p>

                <h2 className="text-xl font-bold mb-2">Location:</h2>
                <p className="text-gray-700 mb-2">{program.location}</p>
                
                <h2 className="text-xl font-bold mb-2">Sector:</h2>
                <p className="text-gray-700 mb-2">{program.sector}</p>

                <h2 className="text-xl font-bold mb-2">Employee Count:</h2>
                <p className="text-gray-700 mb-2">{program.employeeCount}</p>

                <h2 className="text-xl font-bold mb-2">Annual Electricity Usage:</h2>
                <p className="text-gray-700 mb-2">{program.annualElectricity}</p>

                <h2 className="text-xl font-bold mb-2">Annual Gas Usage:</h2>
                <p className="text-gray-700 mb-2">{program.annualGasUsage}</p>

                <h2 className="text-xl font-bold mb-2">Link:</h2>
                <p className="text-gray-700 mb-2">{program.link}</p>

                <h2 className="text-xl font-bold mb-2">Description:</h2>
                <p className="text-gray-700 mb-2">{program.description}</p>

                <div className="flex justify-end mt-4">
                  <Link to={`/program/edit/${program._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black ml-2" />
                  </Link>
                  <Link to={`/program/delete/${program._id}`}>
                    <MdDelete className="text-2xl text-red-800 hover:text-black ml-2" />
                  </Link>
                  <Link to={`/program/info/${program._id}`}>
                    <AiOutlineInfoCircle className="text-2xl text-blue-800 hover:text-black ml-2" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No programs available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Program;
