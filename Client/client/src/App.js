import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Program from './pages/Program'
import Contact from './pages/Contact'
import FundingForm from './components/FundingForm'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/funding',
    element:<FundingForm/>
  },
  {
    path:'/program',
    element:<Program/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router}>
      <Home/>
    </RouterProvider>
  )
}

export default App