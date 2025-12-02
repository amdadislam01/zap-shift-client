import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const DeliverysBoy = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: riders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-center text-lg font-semibold">Loading...</p>;
  }

  // Approve Rider
  const handleApprove = async (id, email) => {
  const updateInfo = {
    status: "approved",
    email: email
  };

  axiosSecure.patch(`/riders/${id}`, updateInfo).then((res) => {
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Rider Approved",
        timer: 2000,
        showConfirmButton: false,
      });
      refetch();
    }
  });
};


  // Reject Rider
  const handleReject = async (id) => {
    const updateInfo = { status: "rejected" };

    axiosSecure.patch(`/riders/${id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          icon: "info",
          title: "Rider Has Been Rejected",
          timer: 2000,
          showConfirmButton: false,
        });
        refetch();
      }
    });
  };

  // Delete Rider
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This rider will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              icon: "success",
              title: "Rider Deleted",
              timer: 2000,
              showConfirmButton: false,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Delivery Data : {riders.length}
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-800 text-white text-sm uppercase">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Age</th>
              <th className="px-4 py-3">Region</th>
              <th className="px-4 py-3">District</th>
              <th className="px-4 py-3">NID</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider) => (
              <tr
                key={rider._id}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="px-4 py-3 font-semibold">{rider.name}</td>
                <td className="px-4 py-3">{rider.email}</td>
                <td className="px-4 py-3">{rider.age}</td>
                <td className="px-4 py-3">{rider.region}</td>
                <td className="px-4 py-3">{rider.district}</td>
                <td className="px-4 py-3">{rider.nid}</td>
                <td className="px-4 py-3">{rider.contact}</td>

                <td
                  className={`px-4 py-3 font-bold ${
                    rider.status === "pending"
                      ? "text-yellow-500"
                      : rider.status === "approved"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {rider.status}
                </td>

                {/* Actions */}
                <td className="px-4 py-3 flex items-center gap-2 justify-center">
                  <button
                    onClick={() => handleApprove(rider._id, rider.email)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs cursor-pointer"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleReject(rider._id)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-md text-xs cursor-pointer"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => handleDelete(rider._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs cursor-pointer"
                  >
                    Delete
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

export default DeliverysBoy;
