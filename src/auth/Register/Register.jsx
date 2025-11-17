import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../assets/authImage.png";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, signInWithGoogle, updateUserProfile } = UseAuth();
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();
  const handleRegister = (data) => {
    // console.log("After Register", data.photo[0]);
    const profileImage = data.photo[0];
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        // Store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImage);
        const imageAPI = `https://api.imgbb.com/1/upload?&key=${
          import.meta.env.VITE_IMAGE_HOST
        }`;
        axios.post(imageAPI, formData).then((res) => {
          console.log("after image upload", res.data.data.url);
          //update user profile hear
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("User Profile Updated done");
            })
            .catch((error) => console.log(error));
        });
        toast.success("Register successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Register failed!");
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

        <div className="flex flex-col gap-4 w-full max-w-lg mx-auto lg:ml-auto lg:mr-36">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Create an Account
          </h1>
          <p className="text-gray-700 mb-2">Register with ZapShift</p>

          {preview && (
            <img
              src={preview}
              alt="Image Upload"
              className="w-13 h-13 rounded-full border border-green-500"
            />
          )}

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col gap-3"
          >
            <label className="text-sm font-medium text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-lime-300"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name Is Required</p>
            )}
            <label className="text-sm font-medium text-gray-800">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("photo", { required: true })}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                }
              }}
              className=" w-full border border-gray-300 rounded-lg 
               px-4 py-3 bg-white cursor-pointer 
               file:bg-[#C7EA46] file:text-black file:font-medium 
               file:border-none file:rounded-md file:px-4 file:py-1
               hover:border-gray-400 transition
               outline-none focus:ring-2 focus:ring-lime-300"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Profile Image Is Required</p>
            )}
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
              value="Register"
              className="w-full bg-[#C7EA46] hover:bg-[#b5df37] transition py-3 rounded-lg font-semibold"
            />
          </form>

          <p className="text-sm text-gray-700 text-center lg:text-left">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-green-600 cursor-pointer font-medium"
            >
              Login
            </Link>
          </p>

          <div className="flex items-center gap-2 my-2">
            <div className="h-[1px] bg-gray-300 flex-1"></div>
            <p className="text-gray-700">Or</p>
            <div className="h-[1px] bg-gray-300 flex-1"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full flex items-center justify-center gap-2 border bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            <FcGoogle size={22} />
            Register with Google
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

export default Register;
