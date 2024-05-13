import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { NavigationBar } from "../components/Layout";

const AuthLayout = () => {
  const { isSignedIn } = useUser();
  if (isSignedIn) return <Navigate to={"/"} />;
  return <>
  <NavigationBar/>
  <div className="mt-16">
  <Outlet />
  </div>
  </>
};

export default AuthLayout;
