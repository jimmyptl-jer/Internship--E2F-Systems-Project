import React from 'react'
import {BsArrowBarLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackButton = ({destination='/'}) => {
  return (
    <div className='flex'>
      <Link to={destination}
            className='bg-sky-800 text-white px-4 py-1 rounded-leg w-fit'> 
            <BsArrowBarLeft className='text-2xl'></BsArrowBarLeft>
      </Link>
    </div>
  )
}

export default BackButton;