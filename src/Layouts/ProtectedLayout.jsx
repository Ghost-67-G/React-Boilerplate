import { useUser } from "@clerk/clerk-react";
import React from "react";

// import { useUserAuth } from "../context/userContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const { isSignedIn } = useUser();
  if (!isSignedIn) return <Navigate to={"/login"} />;
  return <Outlet />;
};

export default ProtectedLayout;
