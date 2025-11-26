import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handelPayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/checkout-payment", paymentInfo);
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Place Your Payment
        </h2>

        <div className="bg-gray-50 p-4 rounded-md border mb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Parcel Name: <span className="font-normal">{parcel.parcelName}</span>
          </h3>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold">Cost:</span>{" "}
            <span className="text-green-600 font-bold text-xl">${parcel.cost}</span>
          </p>
        </div>

        <button
          onClick={handelPayment}
          className="w-full bg-green-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition duration-300 cursor-pointer"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
