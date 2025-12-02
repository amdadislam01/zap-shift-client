import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import riderImage from "../../assets/agent-pending.png";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const BeRider = () => {
  const { register, handleSubmit, watch } = useForm();
  const servesCenter = useLoaderData();
  const axiosSecure = useAxiosSecure();
  // const { user } = UseAuth();

  const regionsDuplicate = servesCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtByResigons = (region) => {
    if (!region) return [];
    const regionDistrict = servesCenter.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const riderRegions = watch("region");

  const handelBeARider = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Application has been submit.',
          showConfirmButton: false,
          timer: 2000
        })
      }
    });
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-10 pt-20 pb-16 mt-12">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[72%] bg-white rounded-2xl px-6 sm:px-10 py-12 md:py-16">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#003B36]">
            Be a Rider
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle.
          </p>
        </div>

        <div className="w-full border-t border-gray-300 my-8"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit(handelBeARider)}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003B36] mb-6">
              Tell us about yourself
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold">Your Name</label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Your age</label>
                <input
                  type="number"
                  {...register("age")}
                  placeholder="Your age"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Your Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Your Email"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Your Region</label>
                <div className="relative">
                  <select
                    {...register("region")}
                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none"
                  >
                    <option>Select your Region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <IoIosArrowDown className="absolute right-3 top-5 text-gray-500" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">NID No</label>
                <input
                  type="number"
                  {...register("nid")}
                  placeholder="NID"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Contact</label>
                <input
                  type="number"
                  {...register("contact")}
                  placeholder="Contact"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Your Districts</label>
              <div className="relative">
                <select
                  {...register("district")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none"
                >
                  <option>Select your Districts</option>

                  {districtByResigons(riderRegions)?.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <IoIosArrowDown className="absolute right-3 top-5 text-gray-500" />
              </div>
            </div>

            <input
              type="submit"
              value="Apply As a Rider"
              className="w-full bg-[#C7EA46] hover:bg-[#b5df37] transition py-3 rounded-lg font-semibold mt-7"
            />
          </form>

          <div className="flex justify-center items-start">
            <img
              src={riderImage}
              alt="rider"
              className="w-[260px] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[480px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeRider;
