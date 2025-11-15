import React from "react";
import logo from '../assets/logo.png'
const Logo = () => {
  return (
    <div className="flex items-end">
      <img className="w-9 sm:w-10 md:w-11" src={logo} alt="Logo" />
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1c1c1c] -ms-2.5 -mt-1.5">
        ZapShift
      </h2>
    </div>
  );
};

export default Logo;
