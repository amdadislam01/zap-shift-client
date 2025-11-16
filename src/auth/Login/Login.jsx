import React from "react";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../assets/authImage.png";
import Logo from "../../components/Logo";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F6F9EE]">
      <div className="w-full lg:w-1/2 bg-white px-6 sm:px-10 lg:px-20 py-10 flex flex-col">
        <div className="mb-10">
          <Logo />
        </div>

        <div className="flex flex-col gap-4 w-full max-w-lg mx-auto lg:ml-auto lg:mr-36 mt-10 lg:mt-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Welcome Back
          </h1>

          <p className="text-gray-700 mb-6">Login with ZapShift</p>

          <form className="flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300"
            />
            <label className="text-sm font-medium text-gray-800">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300"
            />
          </form>

          <Link to={'/forgate-password'} className="text-sm text-gray-600 underline cursor-pointer">
            Forget Password?
          </Link>

          <button className="w-full bg-[#C7EA46] hover:bg-[#b5df37] transition py-3 rounded-lg font-semibold">
            Login
          </button>

          <p className="text-sm text-gray-700 text-center lg:text-left">
            Don’t have any account?{" "}
            <Link to={'/register'} className="text-green-600 cursor-pointer font-medium">
              Register
            </Link>
          </p>

          <div className="flex items-center gap-2 my-2">
            <div className="h-[1px] bg-gray-300 flex-1"></div>
            <p className="text-gray-700">Or</p>
            <div className="h-[1px] bg-gray-300 flex-1"></div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition">
            <FcGoogle size={22} />
            Login with Google
          </button>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 justify-center items-center p-10">
        <img src={loginImage} alt="illustration" className="w-[420px] xl:w-[650px]" />
      </div>
    </div>
  );
};

export default Login;
