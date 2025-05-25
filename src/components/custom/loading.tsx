"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 py-6 min-h-screen justify-center items-center bg-white">
      <div className="w-full max-w-3xl">
        {/* Centered Card */}
        <div className="bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-6">
          {/* Spinner animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-14 h-14 text-indigo-600" />
          </motion.div>

          {/* Loading message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800">Loading</h2>
            <p className="text-sm text-gray-600">
              Please wait while we prepare everything for you
            </p>
          </motion.div>

          {/* Animated Dots */}
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2.5 h-2.5 bg-indigo-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full mt-2">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
