import React from "react";
import deleveryTop from "../assets/tiny-deliveryman.png";
import heroright from "../assets/big-deliveryman.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 pt-28 pb-16 md:pb-24">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[72%] bg-gray-50 rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-14 md:py-20">
        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
          <img
            src={deleveryTop}
            className="w-20 mx-auto md:mx-0 mb-4"
            alt="Top Icon"
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            We Make Sure Your{" "}
            <span className="text-lime-500">Parcel Arrives</span>
            <br className="hidden md:block" /> On Time — No Fuss.
          </h1>

          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-6">
            <button className="bg-[#ccff66] hover:bg-[#c7fb60] text-black font-bold px-6 py-3 rounded-full w-full sm:w-auto">
              Track Your Parcel
            </button>

            <button className="bg-black text-[#ccff66] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 duration-200">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>

            <Link to={'/rider'} className="border border-gray-300 px-6 py-3 rounded-xl text-gray-700 font-semibold w-full sm:w-auto">
              Be A Rider
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={heroright}
            className="w-64 sm:w-80 md:w-[420px] lg:w-[480px] xl:w-[520px]"
            alt="Right Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
