import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgramModal from './ProgramModal';

import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const SingleProgram = ({ program }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      key={program._id}
      className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
    >
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {program.publishYear}
      </h2>
      <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl' />
        <h2 className='my-1'>{program.programName}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300' />
        <h2 className='my-1'>{program.eligibility}</h2>
      </div>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black'
          onClick={() => setShowModal(true)}
        />



        <Link to={`/programs/edit/${program._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-800 hover:text-black' />
        </Link>

        <Link to={`/programs/delete/${program._id}`}>
          <MdOutlineDelete className='text-2xl text-red-800 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <ProgramModal program={program} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default SingleProgram;
