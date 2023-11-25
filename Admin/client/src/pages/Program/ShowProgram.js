import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';

const ShowProgram = () => {
  const [program, setProgram] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:5001/program/${id}`) // Assuming the API endpoint is correct
      .then((response) => {
        setProgram(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Program</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-grey-500'>Program Name</span>
            <span>{program.programName}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-grey-500'>Eligibility</span>
            <span>{program.eligibility}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-grey-500'>Link</span>
            <span>{program.link}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-grey-500'>Project Type</span>
            <span>{program.projectType}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-grey-500'>Description</span>
            <span>{program.description}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProgram;
