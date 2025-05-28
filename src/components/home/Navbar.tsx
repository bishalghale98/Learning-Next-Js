import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-black/20 backdrop-blur-md shadow-md transition duration-300">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Add logo if needed */}
            <span className="text-2xl font-bold text-white tracking-tight">
              Bishal Studio
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-purple-400 transition"
            >
              Home
            </Link>
            <Link
              href="/home"
              className="text-sm font-medium text-white hover:text-purple-400 transition"
            >
              Login
            </Link>
            <Link
              href="/admin"
              className="text-sm font-medium text-white hover:text-purple-400 transition"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="text-white hover:text-purple-300 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
