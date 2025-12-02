import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const [searchText, setSearchText] = useState('');
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });
  // Admin Make User
  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${user.displayName} Marked As An Admin.`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  // Admin Delete Function
  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove ${user.displayName} from Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const roleInfo = { role: "user" };

        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();

            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.displayName} has been removed from Admin.`,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  };


  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Manage Users : {users.length}
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search user..."
          className="border px-3 py-2 rounded-md w-64"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-800 text-white text-sm uppercase">
            <tr>
              <th className="px-4 py-3 text-center">SL</th>
              <th className="px-4 py-3 text-center">Photo</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">User Role</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                {/* SL Number */}
                <td className="px-4 py-3 text-center font-semibold">
                  {index + 1}
                </td>

                {/* User Photo */}
                <td className="px-4 py-3 text-center">
                  <img
                    src={user.photoURL || "/default-user.png"}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                </td>

                {/* Name */}
                <td className="px-4 py-3 font-semibold">{user.displayName}</td>

                {/* Email */}
                <td className="px-4 py-3">{user.email}</td>

                {/* User Role */}
                <td className="px-4 py-3 font-semibold uppercase">
                  {user.role}
                </td>

                {/* Admin Actions */}
                <td className="px-4 py-3">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Remove AD!
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Admin AP!
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
