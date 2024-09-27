import React, { useEffect } from "react";
import { Laptop, SmartphoneCharging, Tablet } from "lucide-react";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../JS/Actions/ProductAction";
import { Route, Link, Routes, useLocation, Navigate } from "react-router-dom";
import Smartphone from "../components/Smartphone";
import LaptopComponent from "../components/LaptopComponent";
import TabletComponent from "../components/TabletComponent";

const tabs = [
  { id: "smartphone", label: "Smartphone", icon: SmartphoneCharging, path: "smartphone" },
  { id: "laptops", label: "Laptops", icon: Laptop, path: "laptops" },
  { id: "tablet", label: "Tablets", icon: Tablet, path: "tablet" },
];

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductReducer.products);
  const location = useLocation();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Filter products by category
  const smartphones = products.filter((product) => product.category === "smartphone");
  const laptops = products.filter((product) => product.category === "laptop");
  const tablets = products.filter((product) => product.category === "tablet");

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold mb-8 text-emerald-400 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Products
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-8">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={`/products/${tab.path}`}
                className={`flex items-center px-4 py-2 mx-2 rounded-md transition-colors duration-200 ${
                  location.pathname.includes(tab.path)
                    ? "bg-blue-800 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <tab.icon className="mr-2 h-5 w-5" />
                {tab.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <Routes>
        <Route index element={<Navigate to="smartphone" />} />
          <Route path="smartphone" element={<Smartphone products={smartphones} />} />
          <Route path="laptops" element={<LaptopComponent products={laptops} />} />
          <Route path="tablet" element={<TabletComponent products={tablets} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Products;
