import React from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSendParcel = (data) => {
    console.log(data);
    
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
              <input type="radio" name="type" value="document" {...register('parcelType')} defaultChecked />
              <span>Document</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" value="non-document" name="type" {...register('parcelType')} />
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
                {...register('parcelName')}
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
                {...register('parcelWeight')}
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
                  {...register('senderName')}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Sender Email</label>
                <input
                  type="text"
                  placeholder="Sender Email"
                  {...register('senderEmail')}
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
                  {...register('senderAddress')}
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
                  {...register('senderContact')}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Your District</label>
                <div className="relative">
                  <select className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none">
                    <option>Select your region</option>
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
                  {...register('receiverName')}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>


              <div>
                <label className="text-sm font-semibold">Receiver Email</label>
                <input
                  type="text"
                  placeholder="Receiver Email"
                  {...register('receiverEmail')}
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
                  {...register('receiverAddress')}
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
                  {...register('receiverContact')}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Receiver Region</label>
                <div className="relative">
                  <select className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 appearance-none">
                    <option>Select your region</option>
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
