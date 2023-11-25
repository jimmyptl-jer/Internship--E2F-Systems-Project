import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BsInfoCircle } from 'react-icons/bs';

const ProgramModal = ({ program, onClose }) => {
  return (
    <div
      className='w-100 fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-400 bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='px-4 py-1 bg-red-300 rounded-lg'>
          {program.publishYear}
        </h2>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{program.programName}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BsInfoCircle className='text-red-300' />
          <h2 className='my-1'>{program.eligibility}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BsInfoCircle className='text-red-300' />
          <h2 className='my-1'>{program.link}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BsInfoCircle className='text-red-300' />
          <h2 className='my-1'>{program.projectType}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BsInfoCircle className='text-red-300' />
          <h2 className='my-1'>{program.supportingDocs}</h2>
        </div>
        <div className='mt-2'>{/* Add any additional program-specific fields here */}</div>
        <p className='my-2'>{program.description}</p>
      </div>
    </div>
  );
};

export default ProgramModal;
