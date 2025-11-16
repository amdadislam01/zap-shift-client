import React from "react";
import { Link } from "react-router";
import errorImage from '../../assets/error.png';

const Error = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center px-4 py-10">
      <div className="bg-white rounded-2xl w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] py-16 flex flex-col justify-center items-center">

        {/* 404 Image */}
        <img
          src={errorImage} 
          alt="Error Illustration"
          className="w-48 sm:w-56 md:w-64 mb-6"
        />
        {/* BUTTON */}
        <Link
          to="/"
          className="bg-lime-300 hover:bg-lime-400 transition px-8 py-3 rounded-full font-medium text-gray-900 shadow-sm"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
