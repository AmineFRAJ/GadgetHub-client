import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className=" flex flex-col items-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
            Welcome to Our Website
          </h1>
          <img className="w-48 h-48" src="/ghub.png" alt="" />
          <p className="text-center text-xl text-gray-300 mb-12">
            Find the perfect phone, laptop, or tablet you're searching for, all
            at the best prices available!
          </p>{" "}
          <Link
            to="/smartphone"
            className=" rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 "
          >
            Discover
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="container  rounded-lg relative md:h-48 top-0 left-1/2 -translate-x-1/2 w-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3)_0%,rgba(200,200,200,0.2)_45%,rgba(255,255,255,0.1)_100%)] flex flex-col sm:flex-row items-center hover:cursor-pointer   px-4"
          >
            <div className="text-center sm:text-left sm:flex-1 mb-4 sm:mb-0  lg:ml-48">
              <h2 className="text-2xl font-bold text-white mb-2">
                Check out our best-selling phone!
              </h2>
              <p className="text-white text-lg">
                Don't miss out on the latest features and design. <br />
                Special promotion: Get 20% off for a limited time!
              </p>
            </div>
            <img
              src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/iphone-x-new-model-13.png"
              alt="Best Selling Phone"
              className="h-32 w-32 sm:h-48 sm:w-48 object-contain lg:mr-48"
            />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4">
            Explore Our Products
          </h1>
          <p className="text-center text-xl text-gray-300 mb-12">
            Discover the latest trends in phones, laptops, and tablets.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
