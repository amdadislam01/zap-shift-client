import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const payments = [
//   {
//     parcel: "Liquid Cleanser",
//     name: "Shakil",
//     address: "লাকসামগাঁও, পাকুন্দিয়া সদর, পাকুন্দিয়া",
//     phone: "01773689877",
//     tracking: "568352",
//     amount: "৳ 121 (Paid)",
//   },
//   {
//     parcel: "Liquid Cleanser",
//     name: "",
//     address: "লাকসামগাঁও, পাকুন্দিয়া সদর, পাকুন্দিয়া",
//     phone: "",
//     tracking: "568352",
//     amount: "৳ 121 (Paid)",
//   },
//   {
//     parcel: "Liquid Cleanser",
//     name: "Anika",
//     address: "আনিকা\nডাউটগাত, সাভার, ঢাকা",
//     phone: "01987654321",
//     tracking: "568352",
//     amount: "৳ 121 (Paid)",
//   },
//   {
//     parcel: "Liquid Cleanser",
//     name: "",
//     address: "লাকসামগাঁও, পাকুন্দিয়া সদর, পাকুন্দিয়া",
//     phone: "",
//     tracking: "568352",
//     amount: "৳ 121 (Paid)",
//   },
//   {
//     parcel: "Liquid Cleanser",
//     name: "Rameez",
//     address: "রামিজ\nকুড়িগ্রাম, ঢাকা",
//     phone: "01823456789",
//     tracking: "568352",
//     amount: "৳ 121 (Paid)",
//   },
// ];


const PaymentHistory = () => {
    const {user} = UseAuth();
    const axiosSecure = useAxiosSecure();
    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data;
        }
    })
  return (
    <div className="p-2 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Payment History: {payments.length}</h1>

      <div className="border rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-4 px-4">Parcel Info</th>
              <th className="py-4 px-4">Transaction ID</th>
              <th className="py-4 px-4">Tracking Number</th>
              <th className="py-4 px-4">Payment Info</th>
              <th className="py-4 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 !== 0 ? "bg-gray-50" : "bg-white"
                } text-sm`}
              >
                {/* Parcel Info */}
                <td className="py-4 px-4">{p.parcelName}</td>

                {/* Recipient Info */}
                <td className="py-4 px-4 whitespace-pre-line">
                  {p.transactionId}
                </td>

                {/* Tracking */}
                <td className="py-4 px-4">{p.trackingId}</td>

                {/* Payment */}
                <td className="py-4 px-4">{p.amount}</td>

                {/* Action */}
                <td className="py-4 px-4 text-center">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-4 py-1.5 rounded-md">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
