import React from "react";
import { handleModel } from "../redux/layoutSlices/modelSlice";
import { useDispatch } from "react-redux";
import { SignOutButton } from "@clerk/clerk-react";
import { Button } from "flowbite-react";

const Home = () => {
  const d = useDispatch();
  return (
    <div>
      <Button
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
        Click Me
      </Button>
      {/* <UserButton /> */}
      <SignOutButton />
    </div>
  );
};

export default Home;
