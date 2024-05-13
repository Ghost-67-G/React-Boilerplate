import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { isSignedIn } = useUser();
  if (isSignedIn) return <Navigate to={"/"} />;
  return <Outlet />;
};

export default AuthLayout;
