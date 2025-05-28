"use client";
import Navbar from "@/components/home/Navbar";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Home = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 mt-20">
          <div className="flex flex-col items-center gap-6">
            {/* Profile Picture Section */}
            <div className="relative group">
              <Image
                src={session.user?.image || "/Profilepicture.png"}
                alt="Profile Picture"
                width={140}
                height={140}
                className="rounded-full border-4 border-indigo-200 shadow-lg"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full shadow-md">
                  View Profile
                </span>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-800">
                Welcome, {session.user?.name || "User"}
              </h1>
              <p className="text-md text-gray-500 mt-1">
                {session.user?.email}
              </p>
            </div>

            {/* Sign Out Button */}
            <button
              onClick={() => signOut()}
              className="px-8 py-2 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      </>
    );
  }

  if (session === null) {
    return (
      <>
        <Navbar />
        <div className="h-screen w-screen bg-gray-400">
          {/* Modal Overlay */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/30">
            {/* Modal Container */}
            <div className="relative w-full max-w-md">
              {/* Modal Content */}
              <div className="rounded-xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden transition-all duration-300 animate-fade-in-up">
                <div className="p-8">
                  {/* Logo & Heading */}
                  <div className="flex flex-col items-center text-center mb-8">
                    <img
                      src="https://www.svgrepo.com/show/475643/dribbble-color.svg"
                      loading="lazy"
                      className="w-12 h-12 mb-4"
                      alt="Company Logo"
                    />
                    <h2 className="text-2xl font-bold text-cyan-900 dark:text-white">
                      Log in to unlock the <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        best of MyCompany
                      </span>
                    </h2>
                  </div>

                  {/* Auth Buttons */}
                  <div className="space-y-4">
                    <button
                      onClick={() => signIn("google")}
                      className="group relative w-full h-12 px-6 border-2 border-gray-300 rounded-full transition-all duration-300 
                       hover:border-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300
                       active:scale-95 dark:border-gray-600"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          className="absolute left-6 w-5"
                          alt="Google logo"
                        />
                        <span className="font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300 group-hover:text-blue-600">
                          Continue with Google
                        </span>
                      </div>
                    </button>

                    {/* Uncomment if you want GitHub auth */}
                    {/* <button
              className="group relative w-full h-12 px-6 border-2 border-gray-300 rounded-full transition-all duration-300 
                       hover:border-purple-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300
                       active:scale-95 dark:border-gray-600"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute left-6 w-5 text-gray-700 dark:text-gray-200"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300 group-hover:text-purple-600">
                  Continue with GitHub
                </span>
              </div>
            </button> */}
                  </div>

                  {/* Footer Links */}
                  <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      By proceeding, you agree to our{" "}
                      <a
                        href="#"
                        className="underline hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Terms of Use
                      </a>{" "}
                      and confirm you have read our{" "}
                      <a
                        href="#"
                        className="underline hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        Privacy and Cookie Statement
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Home;
