import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import { Link } from 'react-router-dom'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='text-white bg-green-950 flex flex-auto items-center h-24 mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold cursor-pointer'>E2F</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link to='/about'> About Us </Link>
        </li>
        <li className='p-4'>
          <Link to='/program'>Funding Schemes</Link>
        </li>
        <li className='p-4'>
          <Link to='/contact'>Contact Us</Link>
        </li>
        {/* <li className='p-4'> */}
          {/* <Link to='/blog'>Newsletter </Link>
        </li> */}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[50%] border-r h-full border-r-green-900 bg-yellow-500 ease-in-out duration-500' : 'fixed hidden'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>E2F</h1>
        <ul className='pt-12 uppercase'>
          <li className='p-4 border-b border-gray-400'>
            <Link to='/about'> About Us </Link>
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