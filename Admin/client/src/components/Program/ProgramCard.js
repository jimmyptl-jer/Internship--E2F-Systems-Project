import React from 'react';

import SingleProgram from './SingleProgram';
const ProgramCard = ({ programs }) => {
  console.log(programs);
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {programs.map((program,index) => (
        <SingleProgram program={program} key={program._id}/>
      ))}
    </div>
  );
};

export default ProgramCard;
