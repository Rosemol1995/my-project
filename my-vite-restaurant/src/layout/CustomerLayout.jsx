import React from 'react'
import Navbar from '../components/customer/Navbar'
import Footer from '../components/customer/Footer'
import { Outlet } from 'react-router-dom'

function Customerlayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className='flex-grow'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Customerlayout
