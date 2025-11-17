import React from "react";
import { Navigate, useLocation } from "react-router";
import UseAuth from "../hooks/UseAuth";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return <p>Loading.....</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivetRoutes;
