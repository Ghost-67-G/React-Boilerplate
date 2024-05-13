import { useUser } from "@clerk/clerk-react";
import React from "react";

// import { useUserAuth } from "../context/userContext";
import { Navigate, Outlet } from "react-router-dom";
import { NavigationBar } from "../components/Layout";

const ProtectedLayout = () => {
  const { isSignedIn } = useUser();
  if (!isSignedIn) return <Navigate to={"/login"} />;
  return (
    <>
      <NavigationBar />
      <div className={"mt-16"}>
        <Outlet />
      </div>
    </>
  );
};

export default ProtectedLayout;
