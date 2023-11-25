import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='font-bold p-2 text-2xl'>Grow with E2F</p>
        <h1 className='text-[green] md:text-7xl sm:text-6xl text text-4xl font-bold md:py-6'>GreenThumb</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for </p>
          <Typed 
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' 
            strings={['You','Startup','Factory']} 
            typeSpeed={120} 
            backSpeed={140} 
            loop/>
        </div>

        <p className='md:text-2xl text-xl bold text-gray-500'>Let us be the source, to find a perfect match for your energy needs!</p>
      </div>
    </div>
  )
}

export default Hero