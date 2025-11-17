import React from "react";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../assets/authImage.png";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser, signInWithGoogle } = UseAuth();
  const navigate = useNavigate();
  const handleLogin = (data) => {
    // console.log("After Register", data);
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("login failed!");
      });
  };

  const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          console.log(result);
          toast.success("Login successful!");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Google login failed!");
        });
    };
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

          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-3"
          >
            <label className="text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email Is Required</p>
            )}
            <label className="text-sm font-medium text-gray-800">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/~`]).{8,}$/,
              })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password Is Required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password Must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must have at least one uppercase at least one lowercase
                at least one number at least one special character
              </p>
            )}
            <input
              type="submit"
              value="Login"
              className="w-full bg-[#C7EA46] hover:bg-[#b5df37] transition py-3 rounded-lg font-semibold"
            />
          </form>

          <Link
            to={"/forgate-password"}
            className="text-sm text-gray-600 underline cursor-pointer"
          >
            Forget Password?
          </Link>

          <p className="text-sm text-gray-700 text-center lg:text-left">
            Don’t have any account?{" "}
            <Link
              to={"/register"}
              className="text-green-600 cursor-pointer font-medium"
            >
              Register
            </Link>
          </p>

          <div className="flex items-center gap-2 my-2">
            <div className="h-[1px] bg-gray-300 flex-1"></div>
            <p className="text-gray-700">Or</p>
            <div className="h-[1px] bg-gray-300 flex-1"></div>
          </div>

          <button onClick={handleGoogleSignIn} type="button" className="w-full flex items-center justify-center gap-2 border bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition">
            <FcGoogle size={22} />
            Login with Google
          </button>
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

export default Login;
