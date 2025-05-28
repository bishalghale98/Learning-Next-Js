"use client";

import Link from "next/link";



export default function ClientPage() {
  return (
    <div>
      <nav className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-lg transition-colors duration-300 md:px-10 lg:px-10">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo and Home Link */}
          {/* <a href="#" class="flex items-center">
<img class="h-10 w-auto" src="https://little-joy-studio.vercel.app/studio.png" width="999" height="999" alt="little joys studio" />
    </a> */}
          <a href="/" className="flex items-center shrink-0">
            {/* <img
              className="w-10"
              height={100}
              width={100}
              src="https://tailwindflex.com/images/logo.svg"
              alt="Talwindflex logo"
            /> */}
            <span className="md:flex text-2xl mt-0.5 font-bold text-primary-600 text-white">
              Bishal Studio
            </span>
          </a>
          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center md:gap-8 text-white">
            <Link
              href="/"
              className="text-sm font-medium hover:text-purple-400 transition"
            >
              home
            </Link>

             <Link
              href="/admin"
              className="text-sm font-medium hover:text-purple-400 transition"
            >
              Admin
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
      {/* Middle Section */}
      {/* <div className="flex items-center justify-center h-screen dark:bg-gray-800">
        <button
          onClick={() => {
            signIn("google");
          }}
          className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        >
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </div> */}
    </div>
  );
}
