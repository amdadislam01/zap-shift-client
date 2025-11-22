import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../components/Logo";
import UseAuth from "../../hooks/UseAuth";
import { FaRightFromBracket } from "react-icons/fa6"; 

const Navbar = () => {
  const { user, logoutUser } = UseAuth();
  const [open, setOpen] = useState(false);

  const navItem = ({ isActive }) =>
    isActive
      ? "bg-[#ccff66] text-black font-semibold py-2 px-4 rounded-full duration-200"
      : "hover:text-black duration-200";

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#e6e9eb] py-3 flex justify-center">
      <nav
        className="
          w-[95%] sm:w-[92%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%]
          bg-white shadow-sm rounded-2xl py-3 px-4 md:px-6 lg:px-8
          flex justify-between items-center
        "
      >
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10 text-[14px] md:text-[15px] lg:text-[16px] font-medium text-gray-700">
          <NavLink to="/services" className={navItem}>Services</NavLink>
          <NavLink to="/coverage" className={navItem}>Coverage</NavLink>
          <NavLink to="/about" className={navItem}>About Us</NavLink>
          <NavLink to="/send-parcel" className={navItem}>Send Parcel</NavLink>
          <NavLink to="/rider" className={navItem}>Be a Rider</NavLink>
        </ul>

        {/* Desktop Auth */}
        {!user ? (
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to={"/login"}
              className="border border-gray-400 text-gray-700 px-4 py-2 rounded-lg hover:border-black duration-200 text-base"
            >
              Sign In
            </Link>
            <Link
              to={"/rider"}
              className="bg-[#ccff66] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#c7fb60] duration-200 text-base"
            >
              Be a Rider
            </Link>
          </div>
        ) : (
          <div className="hidden lg:flex items-center gap-4">

            {/* Dashboard Link via Profile Image */}
            <Link to="/dashboard">
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer border border-green-500"
              />
            </Link>

            <button
              onClick={logoutUser}
              className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
            >
              <FaRightFromBracket size={18} />
              Logout
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(true)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center gap-6 text-2xl font-semibold transition-all duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-4xl text-gray-800"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <NavLink to="/services" className={navItem} onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/coverage" className={navItem} onClick={() => setOpen(false)}>Coverage</NavLink>
        <NavLink to="/about" className={navItem} onClick={() => setOpen(false)}>About Us</NavLink>
        <NavLink to="/send-parcel" className={navItem} onClick={() => setOpen(false)}>Send Parcel</NavLink>
        <NavLink to="/rider" className={navItem} onClick={() => setOpen(false)}>Be a Rider</NavLink>

        {/* Mobile Auth */}
        {!user ? (
          <>
            <Link to={'/login'} className="border border-gray-400 text-gray-700 py-2 px-8 rounded-lg">
              Sign In
            </Link>
            <Link to={'/rider'} className="bg-[#ccff66] text-black py-2 px-8 rounded-lg font-semibold">
              Be a Rider
            </Link>
          </>
        ) : (
          <div className="flex flex-col items-center gap-2 mt-4">
            <Link to="/dashboard" onClick={() => setOpen(false)}>
              <img
                src={user?.photoURL}
                className="w-20 h-20 rounded-full object-cover border border-green-500 cursor-pointer"
              />
            </Link>

            <p>{user?.displayName}</p>
            <p className="text-lg text-gray-700">{user?.email}</p>

            <button
              onClick={logoutUser}
              className="bg-red-500 text-white py-2 px-10 rounded-lg mt-3 flex items-center gap-2"
            >
              <FaRightFromBracket size={24} />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
