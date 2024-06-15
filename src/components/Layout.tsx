import { useState } from "react";
import { Link } from "react-router-dom";

export function NavigationBar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-gray-300">
      <div className="relative flex items-center justify-between px-6 py-2 sm:h-10 md:justify-center md:py-8">
        <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link to="/" aria-label="Home">
              <img
                src="https://www.svgrepo.com/show/491978/gas-costs.svg"
                height={40}
                width={40}
                alt="logo"
              />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setShow(!show)}
                type="button"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          <Link
            to="/features"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Blog
          </Link>
          <Link
            to="https://docs.pingping.io"
            target="_blank"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Docs
          </Link>
        </div>
        <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
          <span className="inline-flex">
            <Link
              to="/login"
              className="inline-flex items-center border border-transparent px-4 py-2 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none"
            >
              Login
            </Link>
          </span>
          <span className="ml-2 inline-flex rounded-md shadow">
            <Link
              to="/signup"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-none"
            >
              Get started
            </Link>
          </span>
        </div>
      </div>
      <div
        className={`${show ? "flex" : "hidden"} flex-col items-end gap-4 bg-gray-400 md:hidden`}
      >
        <div className="w-full border-b-2 border-white px-4 text-end">
          <Link
            to="/features"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Features
          </Link>
        </div>
        <div className="w-full border-b-2 border-white px-4 text-end">
          <Link
            to="/pricing"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Pricing
          </Link>
        </div>
        <div className="w-full border-b-2 border-white px-4 text-end">
          <Link
            to="/blog"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Blog
          </Link>
        </div>
        <div className="w-full border-b-2 border-white px-4 text-end">
          <Link
            to="https://docs.pingping.io"
            target="_blank"
            className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
          >
            Docs
          </Link>
        </div>
      </div>
    </nav>
  );
}
