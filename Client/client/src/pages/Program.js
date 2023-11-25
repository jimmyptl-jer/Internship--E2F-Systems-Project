import React, { useState, useEffect } from 'react';

const url = 'http://localhost:5002/program';

const Program = () => {
  const [programs, setPrograms] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong 404');
      }

      const data = await response.json();
      setPrograms(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {programs.length > 0 ? (
            programs.map((program) => (
              <div
                key={program._id}
                className="bg-white border p-6 rounded-md shadow-md mb-8 flex flex-col"
              >
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-indigo-700">Program Name:</h2>
                  <p className="text-gray-800">{program.name}</p>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold text-indigo-700">Location:</h2>
                  <p className="text-gray-800">{program.location}</p>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold text-indigo-700">Sector:</h2>
                  <p className="text-gray-800">{program.sector}</p>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold text-indigo-700">Annual Electricity Usage:</h2>
                  <p className="text-gray-800">{program.annualElectricity}</p>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold text-indigo-700">Annual Gas Usage:</h2>
                  <p className="text-gray-800">{program.annualGasUsage}</p>
                </div>

                <div className="mb-4">
                  <h2 className="text-xl font-bold text-indigo-700">Link:</h2>
                  <a
                    href={program.link}
                    className="text-blue-500 underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {program.link}
                  </a>
                </div>

                <div className="mb-2">
                  <h2 className="text-xl font-bold text-indigo-700">Description:</h2>
                  <p className="text-gray-800">{program.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-800">No programs available.</p>
          )}
        </div>

        <div className="mt-8 text-gray-800 bg-white p-6 rounded-md shadow-md">
          <p>
            You might be eligible for more funding schemes. Feel free to
            contact us or add yourself to our book of business. Please
            note that the results provided may not be 100% accurate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Program;
