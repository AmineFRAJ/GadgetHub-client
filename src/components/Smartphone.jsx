import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import React from "react";

const Smartphone = ({ products }) => {
  console.log(products);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="flex flex-wrap ">
        {products.map((product) => (
          <div
            key={product.id}
            className="mb-4 flex w-full md:w-1/2 lg:w-1/3 relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg"
          >
            <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
              <img
                className="object-cover w-full h-80 "
                src={product.image}
                alt={product.model}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
            </div>

            <div className="mt-4 px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-white">
                {product.model}
              </h5>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-emerald-400">
                    ${product.price}
                  </span>
                </p>
              </div>
              <button className="flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300">
                <ShoppingCart size={22} className="mr-2" />
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Smartphone;
