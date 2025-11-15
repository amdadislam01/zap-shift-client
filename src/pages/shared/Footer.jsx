import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="w-full flex justify-center py-14 bg-[#e6e9eb]">
      <footer className="
        bg-[#0c0c0c] 
        w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%]
        max-w-[2000px]
        rounded-3xl 
        text-center 
        text-white 
        py-12
        px-8 md:px-10 lg:px-14
      ">

        <div className="flex items-center justify-center gap-3 mb-6">
          <img 
            src={logo} 
            alt="ZapShift Logo" 
            className="w-10 md:w-12 lg:w-14"
          />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Zap<span className="text-white">Shift</span>
          </h2>
        </div>

        <p className="
          max-w-[750px] mx-auto mt-4 mb-14 
          text-sm md:text-base lg:text-lg opacity-90 leading-relaxed
        ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        <ul className="
          flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16
          py-6 border-y border-dashed border-[#2a2a2a]
          text-[14px] md:text-[16px] lg:text-[18px]
        ">
          <li className="cursor-pointer hover:text-[#ccff66] duration-300">Services</li>
          <li className="cursor-pointer hover:text-[#ccff66] duration-300">Coverage</li>
          <li className="cursor-pointer hover:text-[#ccff66] duration-300">About Us</li>
          <li className="cursor-pointer hover:text-[#ccff66] duration-300">Pricing</li>
          <li className="cursor-pointer hover:text-[#ccff66] duration-300">Blog</li>
          <li className="cursor-pointer hover:text-[#ccff66] duration-300">Contact</li>
        </ul>


        <div className="flex justify-center gap-5 sm:gap-7 md:gap-8 mt-10">
          <a className="bg-white text-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-lg md:text-xl hover:scale-110 duration-300">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a className="bg-white text-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-lg md:text-xl hover:scale-110 duration-300">
            <i className="fa-solid fa-xmark"></i>
          </a>
          <a className="bg-white text-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-lg md:text-xl hover:scale-110 duration-300">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a className="bg-white text-black w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-lg md:text-xl hover:scale-110 duration-300">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>

      </footer>
    </div>
  )
}

export default Footer
