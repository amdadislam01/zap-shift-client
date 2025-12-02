import React from "react";
import UseAuth from "../hooks/UseAuth";
import useRoll from "../hooks/useRoll";
import Error from "../pages/Error/Error";

const AdminRoutes = ({ children }) => {
  const {  loading } = UseAuth();
  const { role, isLoading } = useRoll();

  if (loading || isLoading) {
    return <p>Loading.....</p>;
  }

  if (role !== "admin") {
    return <Error />;
  }
  return children;
};

export default AdminRoutes;
