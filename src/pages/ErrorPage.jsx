import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden mt-48">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
            404
          </h1>
          <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
            Page Not Found
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-center text-xl text-gray-300 mb-12">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="flex justify-center ">
            <Link
              to="/"
              className=" rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 "
            >
              Go back home
            </Link>
          </div>{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
