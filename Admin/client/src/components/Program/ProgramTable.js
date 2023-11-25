import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const ProgramTable = ({ programs }) => {
  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-200 px-4 py-2">No</th>
          <th className="border border-gray-200 px-4 py-2">Program Name</th>
          <th className="border border-gray-200 px-4 py-2">Eligibility</th>
          <th className="border border-gray-200 px-4 py-2">Link</th>
          <th className="border border-gray-200 px-4 py-2">Project Type</th>
          <th className="border border-gray-200 px-4 py-2">Supporting Docs</th>
          <th className="border border-gray-200 px-4 py-2">Description</th>
          <th className="border border-gray-200 px-4 py-2">Operation</th>
        </tr>
      </thead>
      <tbody>
        {programs.map((program, index) => (
          <tr key={program._id}>
            <td className="border border-gray-200 px-4 py-2 text-center">
              {index + 1}
            </td>
            <td className="border border-gray-200 px-4 py-2">
              {program.programName}
            </td>
            <td className="border border-gray-200 px-4 py-2">
              {program.eligibility}
            </td>
            <td className="border border-gray-200 px-4 py-2">
              {program.link}
            </td>
            <td className="border border-gray-200 px-4 py-2">
              {program.projectType}
            </td>
            <td className="border border-gray-200 px-4 py-2">
              {program.supportingDocs}
            </td>
            <td className="border border-gray-200 px-4 py-2">
              {program.description}
            </td>
            <td className="border border-gray-200 px-4 py-2 text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/programs/details/${program._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>
                <Link to={`/programs/edit/${program._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black" />
                </Link>
                <Link to={`/programs/delete/${program._id}`}>
                  <MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProgramTable;
