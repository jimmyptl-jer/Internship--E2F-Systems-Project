import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Typed from 'react-typed';

import FundingForm from './FundingForm';

const Hero = (props) => {

  const [email,setEmail] = useState('')
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {email}

    axios.post('http://localhost:5002/subscribe',data)
    .then((response) =>{
        console.log("Successfully subscribed")
        navigate('/')
        setEmail('')
      }
    )
    .catch((error)=>{
      alert("Error in subscription")
    })
  }

  const openForm = () => {
    navigate('/funding')
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className='max-w-screen-lg mx-auto mt-[-96px] h-screen flex flex-col justify-center items-center text-center'>
      <p className='font-bold text-2xl md:text-3xl lg:text-4xl mb-2 text-gray-500'>Grow with E2F</p>
      <h1 className='text-green-950 md:text-7xl sm:text-6xl text-4xl font-bold mb-4'>GreenThumb</h1>
      <div className='flex justify-center items-center mb-4'>
        <p className='md:text-5xl sm:text-4xl text-4xl font-bold pr-2 text-green-500'>Energy</p>
        <Typed
          className='md:text-5xl sm:text-4xl text-4xl font-bold'
          strings={['Solar', 'Wind', 'Green']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className='md:text-lg text-base font-bold text-gray-500 mb-8'>
        Let us be the source to find a perfect match for your energy needs!
      </p>

      <form className='flex flex-col md:flex-row items-center p-4 rounded ' onSubmit={handleSubmit}>
        <input
          className='py-2 px-4 mb-4 md:mb-0 md:mr-2 bg-gray-100 border border-gray-300 focus:outline-none rounded'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your email address'
        />
        <button
          className='py-2 px-4 bg-green-950 text-white hover:bg-green-600 focus:outline-none rounded'
        >
          Subscribe
        </button>
      </form>
      {/* Get Started Button */}

      <div className='flex items-center mt-8 bg-green-950 text-white p-4 rounded border border-green-950'>
      <p className='text-lg font-bold mr-4'>Search for the best funding scheme</p>
      <button
        onClick={openForm}
        className='border border-white text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none'
      >
        Find your fit!
      </button>
      </div>

      {/* DropdownForm Pop-up */}
      {showForm && (
        <div className='fixed left-0 w-full h-full flex items-center justify-center bg-opacity-80 opacity'>
          <div className='max-w-md w-full p-6 rounded relative'>
            <button
              onClick={closeForm}
              className='absolute right-0 px-4 py-2 text-gray-500 hover:text-gray-700 cursor-pointer white-text'
            >
              Close
            </button>
            <FundingForm closeForm={closeForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;