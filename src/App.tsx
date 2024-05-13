import { BrowserRouter, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import SignUpForm from "./components/Signup";
import LoginForm from "./components/Signin";
import ProtectedLayout from "./Layouts/ProtectedLayout";
import AuthLayout from "./Layouts/AuthLayout";
import Home from "./Pages/Home";
import Models from "./components/modals";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Profile from "./Pages/Profile";

function App() {
  console.log(process.env);
  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", "light");
  }, []);
  return (
    <>
      <BrowserRouter>
        <Models />
        <ToastContainer />
        <Router />
      </BrowserRouter>
    </>
  );
}

function Router() {
  let element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/signup",
          element: <SignUpForm />,
        },
        { path: "/login", element: <LoginForm /> },
      ],
    },
    {
      path: "/",
      element: <ProtectedLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
  ]);

  return element;
}

export default App;
