import React, { useState } from 'react'
import axios from 'axios'

import BackButton from '../../components/BackButton'
import Spinner from '../../components/Spinner';

import { useNavigate, useParams } from 'react-router-dom'

const DeleteProgram = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleProgramBook = () => {
    setLoading(true)

    axios
      .delete(`http://localhost:5001/program/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/program')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className="text-xl">Delete Program</h1>

      {loading ? <Spinner /> : ''}

      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'> Are you sure to delete this Program?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleProgramBook}>
            Yes! I'm Sure!
        </button>
      </div>
    </div>
  )
}

export default DeleteProgram