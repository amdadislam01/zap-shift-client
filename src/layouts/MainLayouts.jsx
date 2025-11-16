import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/shared/Navbar'
import Footer from '../pages/shared/Footer'

const MainLayouts = () => {
  return (
    <div className='bg-[#e6e9eb]'>
      <Navbar />
      <div className="min-h-[40vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayouts