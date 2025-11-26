import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { AiOutlineCheckCircle } from "react-icons/ai";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchPharams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const [paymentInfo, setPaymentInfo]= useState({});
  const sessionId = searchPharams.get("session_id");
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId
          })
        });
    }
  }, [sessionId, axiosSecure]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-xl rounded-lg p-10 text-center max-w-md">
        <div className="flex justify-center mb-5">
          <AiOutlineCheckCircle className="text-green-500" size={80} />
        </div>

        <h2 className="text-3xl font-bold text-green-600 mb-3">
          Payment Successful!
        </h2>

        <p className="text-gray-600 mb-2">
          Your payment was completed successfully. Thank you for your purchase!
          A confirmation email has been sent to your inbox.
        </p>

        <p className="text-gray-600 mb-2">
          Your TransactionId : {paymentInfo.transactionId} 
        </p>
        <p className="text-gray-600 mb-2">
          Your Parcel TrackingId : {paymentInfo.trackingId} 
        </p>

        <button
          onClick={() => navigate(-2)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
