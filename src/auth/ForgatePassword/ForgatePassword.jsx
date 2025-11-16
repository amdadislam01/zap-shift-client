import React from "react";
import loginImage from "../../assets/authImage.png";
import Logo from "../../components/Logo";
import { Link } from "react-router";

const ForgatePassword = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F6F9EE]">
      <div className="w-full lg:w-1/2 bg-white px-6 sm:px-10 lg:px-20 py-10 flex flex-col">
        <div className="mb-10">
          <Logo />
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md mx-auto lg:ml-auto lg:mr-32 mt-10 lg:mt-42">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
           Forgot Password
          </h1>

          <p className="text-gray-700 mb-2">Enter your email address and we’ll send you <br /> a reset link.</p>

          <form className="flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300"
            />
          </form>

          <button className="w-full bg-[#C7EA46] hover:bg-[#b5df37] transition py-3 rounded-lg font-semibold">
            Send
          </button>

          <p className="text-sm text-gray-700 text-center lg:text-left">
            Remember your password?{" "}
            <Link
              to={"/login"}
              className="text-green-600 cursor-pointer font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 justify-center items-center p-10">
        <img
          src={loginImage}
          alt="illustration"
          className="w-[420px] xl:w-[650px]"
        />
      </div>
    </div>
  );
};

export default ForgatePassword;
