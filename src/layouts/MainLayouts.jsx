import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/shared/Navbar'
import Footer from '../pages/shared/Footer'
import { Bounce, ToastContainer } from 'react-toastify'

const MainLayouts = () => {
  return (
    <div className='bg-[#e6e9eb]'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Navbar />
      <div className="min-h-[40vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayouts