import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import { Link } from 'react-router-dom'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
  }
  

  return (
    <div className='text-white flex flex-auto items-center h-24 mx-auto px-4 bg-green-950 cursor-pointer'>
      <h1 className='w-full text-3xl font-bold'>E2F</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link to='/'> Home </Link>
        </li>
        <li className='p-4'>
          <Link to='/program'> Programs </Link>
        </li>

        <li className='p-4'>
          <Link to="/login" className="nav-button">Sign In</Link>
        </li>

        <li className='p-4'>
        <Link to="/register" className="nav-button">Register</Link>
        </li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[50%] border-r h-full border-r-green-900 bg-yellow-500 ease-in-out duration-500' : 'fixed hidden'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>E2F</h1>
        <ul className='pt-12 uppercase'>
          <li className='p-4 border-b border-gray-400'>
            <Link to='/aboutus'> About Us </Link>
          </li>
          <li className='p-4 border-b border-gray-400'>
            <Link to='/programs'>Funding Schemes</Link>
          </li>
          <li className='p-4 border-b border-gray-400'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='p-4 border-b border-gray-400'>
            <Link to='/blog'>Newsletter </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar