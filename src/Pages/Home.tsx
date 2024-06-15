import React from "react";
import { handleModel } from "../redux/layoutSlices/modelSlice";
import { useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import { signOut } from "firebase/auth";
import auth from "../config/firebase";

const Home = () => {
  const d = useDispatch();
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Button
        onClick={() =>
          d(
            handleModel({
              model: "confirmation",
              state: true,
              args: { callBack: () => console.log("call back") },
            }),
          )
        }
      >
        Click Me
      </Button>
      {/* <UserButton /> */}
      <Button onClick={logout}>Log out</Button>
    </div>
  );
};

export default Home;
