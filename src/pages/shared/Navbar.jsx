import React, { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItem = ({ isActive }) =>
    isActive
      ? "bg-[#ccff66] text-black font-semibold py-2 px-4 rounded-full duration-200"
      : "hover:text-black duration-200";

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#e6e9eb] py-3 flex justify-center">
      <nav
        className="
          w-[95%] 
          sm:w-[92%]
          md:w-[90%]
          lg:w-[85%]
          xl:w-[80%]
          2xl:w-[70%]
          bg-white shadow-sm rounded-2xl
          py-3 px-4 md:px-6 lg:px-8
          flex justify-between items-center
        "
      >
        <div className="flex items-center gap-2">
          <img className="w-9 sm:w-10 md:w-11" src={logo} alt="Logo" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1c1c1c]">
            Zap<span className="font-bold">Shift</span>
          </h2>
        </div>

        <ul
          className="
            hidden md:flex items-center
            gap-4 lg:gap-8 xl:gap-10
            text-[14px] md:text-[15px] lg:text-[16px]
            font-medium text-gray-700
          "
        >
          <NavLink to="/services" className={navItem}>
            Services
          </NavLink>
          <NavLink to="/coverage" className={navItem}>
            Coverage
          </NavLink>
          <NavLink to="/about" className={navItem}>
            About Us
          </NavLink>
          <NavLink to="/pricing" className={navItem}>
            Pricing
          </NavLink>
          <NavLink to="/rider" className={navItem}>
            Be a Rider
          </NavLink>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-lg hover:border-black duration-200 text-base">
            Sign In
          </button>
          <button className="bg-[#ccff66] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#c7fb60] duration-200 text-base">
            Sign Up
          </button>
          <button className="bg-black text-[#ccff66] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 duration-200">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>

        <button className="md:hidden text-3xl text-gray-700" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-50
          flex flex-col items-center justify-center gap-6 text-2xl font-semibold
          transition-all duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-4xl text-gray-800">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <NavLink to="/services" className={navItem} onClick={() => setOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/coverage" className={navItem} onClick={() => setOpen(false)}>
          Coverage
        </NavLink>
        <NavLink to="/about" className={navItem} onClick={() => setOpen(false)}>
          About Us
        </NavLink>
        <NavLink to="/pricing" className={navItem} onClick={() => setOpen(false)}>
          Pricing
        </NavLink>
        <NavLink to="/rider" className={navItem} onClick={() => setOpen(false)}>
          Be a Rider
        </NavLink>

        <button className="border border-gray-400 text-gray-700 py-2 px-8 rounded-lg">
          Sign In
        </button>
        <button className="bg-[#ccff66] text-black py-2 px-8 rounded-lg font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
