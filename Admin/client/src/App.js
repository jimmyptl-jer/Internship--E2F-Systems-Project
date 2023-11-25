import React from 'react'
import Navbar from './components/Navbar'

import { Route, Routes } from 'react-router-dom'

// import Home from './pages/Home'
import Program from './pages/Program'
import Register from './pages/Register'
import Login from './pages/Login'

import CreateProgram from './pages/Program/CreateProgram'
import DeleteProgram from './pages/Program/DeleteProgram'
import EditProgram from './pages/Program/EditProgram' 
import Home from './components/Home'
import ShowProgram from './pages/Program/ShowProgram'

const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />}/>
        <Route path="/program" element={<Program />}/>
        <Route path='/program/create' element={<CreateProgram/>} />
        <Route path='/program/delete/:id' element={<DeleteProgram/>} />
        <Route path='/program/edit/:id' element={<EditProgram/>} />
        <Route path='/program/details/:id' element={<ShowProgram />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App