import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";

// import { useUserAuth } from "../context/userContext";
import { Navigate, Outlet } from "react-router-dom";
import { NavigationBar } from "../components/Layout";
import auth from "../config/firebase";

const ProtectedLayout = () => {
  const [user] = useAuthState(auth);
  if (!user) return <Navigate to={"/login"} />;
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
