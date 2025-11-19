import React from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import UseAuth from "../../hooks/UseAuth";

const SendParcel = () => {
  const { register, handleSubmit, watch } = useForm();
  const axiosSecure = useAxiosSecure();
  const {user} = UseAuth();
  const servesCenter = useLoaderData();
  const regionsDuplicate = servesCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // Explore useMemo useCallback
  const senderRegions = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  const districtByResigons = (region) => {
    const regionDistrict = servesCenter.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handelSendParcel = (data) => {
    data.senderName = user?.displayName;
    data.senderEmail = user?.email;
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log("cost price", cost);
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You have to be pay! ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree",
    }).then((result) => {
      if (result.isConfirmed) {
        // Save the parcel info  to the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("After Saving Parcel", res);
        });
        Swal.fire({
          title: "Confirm!",
          text: "Your Product has been Confirmed.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-10 pt-20 pb-16 mt-12">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[72%] bg-white rounded-2xl px-6 sm:px-10 py-12 md:py-16">
        {/* PAGE TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#003B36]">
          Send A Parcel
        </h1>

        <div className="w-full border-t border-gray-300 my-8"></div>

        <h2 className="text-lg sm:text-xl font-semibold text-[#003B36] mb-6">
          Enter your parcel details
        </h2>

        <form onSubmit={handleSubmit(handelSendParcel)}>
          {/* RADIO BUTTONS */}
          <div className="flex gap-10 mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="document"
                {...register("parcelType")}
                defaultChecked
              />
              <span>Document</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="non-document"
                name="type"
                {...register("parcelType")}
              />
              <span>Not-Document</span>
            </label>
          </div>
          {/* PARCEL NAME + WEIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="text-sm font-semibold">Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                {...register("parcelName")}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                placeholder="Parcel Weight (KG)"
                {...register("parcelWeight")}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div className="w-full border-t border-gray-300 my-8"></div>

          {/* SECTION TITLES */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <h3 className="text-lg font-bold text-[#003B36] mb-4">
              Sender Details
            </h3>
            <h3 className="text-lg font-bold text-[#003B36] mb-4">
              Receiver Details
            </h3>
          </div>

          {/* SENDER + RECEIVER FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* SENDER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold">Sender Name</label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  {...register("senderName")}
                  defaultValue={user?.displayName}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Sender Email</label>
                <input
                  type="text"
                  placeholder="Sender Email"
                  {...register("senderEmail")}
                  defaultValue={user?.email}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              {/* <div>
                <label className="text-sm font-semibold">
                  Sender Pickup Wire house
                </label>
                <div className="relative">
                  <select className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none">
                    <option>Select Wire house</option>
                  </select>
                  <IoIosArrowDown className="absolute right-3 top-5 text-gray-500" />
                </div>
              </div> */}

              <div>
                <label className="text-sm font-semibold">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("senderAddress")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Sender Contact No
                </label>
                <input
                  type="number"
                  placeholder="Sender Contact No"
                  {...register("senderContact")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Your Region</label>
                <div className="relative">
                  <select
                    {...register("senderRegion")}
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
                <label className="text-sm font-semibold">Your Districts</label>
                <div className="relative">
                  <select
                    {...register("senderDistrict")}
                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none"
                  >
                    <option>Select your Districts</option>
                    {districtByResigons(senderRegions).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <IoIosArrowDown className="absolute right-3 top-5 text-gray-500" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold">
                  Pickup Instruction
                </label>
                <textarea
                  placeholder="Pickup Instruction"
                  {...register("pickupInstruction")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 h-24"
                ></textarea>
              </div>
            </div>

            {/* RECEIVER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold">Receiver Name</label>
                <input
                  type="text"
                  placeholder="Receiver Name"
                  {...register("receiverName")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Receiver Email</label>
                <input
                  type="text"
                  placeholder="Receiver Email"
                  {...register("receiverEmail")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              {/* <div>
                <label className="text-sm font-semibold">
                  Delivery Wire house
                </label>
                <div className="relative">
                  <select className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none">
                    <option>Select Wire house</option>
                  </select>
                  <IoIosArrowDown className="absolute right-3 top-5 text-gray-500" />
                </div>
              </div> */}

              <div>
                <label className="text-sm font-semibold">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  {...register("receiverAddress")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Receiver Contact No
                </label>
                <input
                  type="number"
                  placeholder="Receiver Contact No"
                  {...register("receiverContact")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Receiver Region</label>
                <div className="relative">
                  <select
                    {...register("receiverRegion")}
                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none"
                  >
                    <option>Select your region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <IoIosArrowDown className="absolute right-3 top-5 text-gray-500" />
                </div>
              </div>
              {/* Receiver District */}
              <div>
                <label className="text-sm font-semibold">
                  Receiver Districts
                </label>
                <div className="relative">
                  <select
                    {...register("receiverDistrict")}
                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none"
                  >
                    <option>Select your Districts</option>
                    {districtByResigons(receiverRegion).map((d, i) => (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <IoIosArrowDown className="absolute right-3 top-5 text-gray-500" />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold">
                  Delivery Instruction
                </label>
                <textarea
                  placeholder="Delivery Instruction"
                  {...register("deliveryInstruction")}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 h-24"
                ></textarea>
              </div>
            </div>
          </div>

          {/* FOOT NOTE */}
          <p className="text-sm text-gray-600 mt-6">
            * PickUp Time 4pm–7pm Approx.
          </p>

          {/* SUBMIT */}
          <input
            type="submit"
            value="Proceed to Confirm Booking"
            className="mt-6 bg-[#C7EA46] text-black px-10 py-3 rounded-lg font-semibold hover:bg-[#b7db3d] transition"
          />
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
