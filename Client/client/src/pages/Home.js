import React from 'react'
import Navbar from '../components/Navbar'

import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Features from '../components/Features'


const Home = () => {

  return (
    <React.Fragment>
      <Navbar/>
      <Hero/>
      <Features/>
      <Blog/>
    </React.Fragment>
  )
}

export default Home