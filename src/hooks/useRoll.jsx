import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRoll = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: role = "user" } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}/role`);
      console.log('in the useroll', res.data);
      
      return res.data?.role || 'user';
    },
  });
  return { role, isLoading };
};

export default useRoll;
