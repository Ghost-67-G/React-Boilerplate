import React from "react";
import { handleModel } from "../redux/layoutSlices/modelSlice";
import { useDispatch } from "react-redux";
import { SignOutButton, UserButton } from "@clerk/clerk-react";

const Home = () => {
  const d = useDispatch();
  return (
    <div>
      <button
        className="btn"
        onClick={() =>
          d(
            handleModel({
              model: "confirmation",
              state: true,
              args: { callBack: () => console.log("call back") },
            })
          )
        }
      >
        open modal
      </button>
      <UserButton />
      <SignOutButton />
    </div>
  );
};

export default Home;
