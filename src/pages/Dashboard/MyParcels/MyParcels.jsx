import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi";
import Swal from "sweetalert2";


const MyParcels = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handelParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // Refresh The data UI
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handelPayment = async (parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName
    }
    const res = await axiosSecure.post('/checkout-payment', paymentInfo)
    window.location.href = res.data.url;
  }

  return (
    <div className="max-w-[1500px] mx-auto mt-10 bg-white p-4 sm:p-6 rounded-lg shadow-md pb-8">
      {/* TITLE */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">
        My Parcels:{" "}
        <span className="text-blue-600 font-bold">{parcels.length}</span>
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-100 border-b border-gray-200 hidden md:table-header-group">
            <tr>
              <th className="py-3 px-5 text-left font-semibold">SL No</th>
              <th className="py-3 px-5 text-left font-semibold">Parcel Name</th>
              <th className="py-3 px-5 text-left font-semibold">Cost</th>
              <th className="py-3 px-5 text-left font-semibold">Payment</th>
              <th className="py-3 px-5 text-center font-semibold">
                Delivery Status
              </th>
              <th className="py-3 px-5 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {parcels.length > 0 ? (
              parcels.map((parcel, index) => (
                <tr
                  key={parcel._id || index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-all duration-150 block md:table-row"
                >
                  {/* SL NO */}
                  <td className="py-3 px-5 block md:table-cell">
                    <span className="font-semibold md:hidden">SL No: </span>
                    {index + 1}
                  </td>

                  {/* NAME */}
                  <td className="py-3 px-5 block md:table-cell font-semibold text-gray-900">
                    <span className="font-semibold md:hidden">Name: </span>
                    {parcel.parcelName}
                  </td>

                  {/* COST */}
                  <td className="py-3 px-5 block md:table-cell">
                    <span className="font-semibold md:hidden">Cost: </span>$
                    {parcel.cost}.00
                  </td>

                  {/* WEIGHT */}
                  <td className="py-3 px-5 block md:table-cell">
                    {parcel.paymentStatus === "paid" ? (
                      <span className="text-green-500">Paid</span>
                    ) : (
                      <button onClick={() => handelPayment(parcel)} className="bg-amber-300 px-3 py-1 font-bold rounded-md hover:bg-amber-500 transition text-sm cursor-pointer">
                        Pay Now
                      </button>
                    )}
                  </td>

                  {/* STATUS */}
                  <td className="py-3 px-5 block md:table-cell text-center">
                    <span className="inline-block px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                      Pending
                    </span>
                  </td>

                  {/* ACTIONS*/}
                  <td className="py-3 px-5 block md:table-cell text-center">
                    <div className="flex justify-center items-center gap-2 whitespace-nowrap overflow-x-auto">
                      {/* VIEW */}
                      <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 transition text-sm cursor-pointer">
                        <FiSearch size={16} /> View
                      </button>

                      {/* EDIT */}
                      <button className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition text-sm cursor-pointer">
                        <FiEdit size={16} /> Edit
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() => handelParcelDelete(parcel._id)}
                        className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition text-sm cursor-pointer"
                      >
                        <FiTrash2 size={16} /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="py-6 text-center text-gray-500 italic block md:table-cell"
                >
                  No parcels found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
