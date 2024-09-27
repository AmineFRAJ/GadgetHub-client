import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";
import React from "react";

const AddProduct = () => {
  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">
        Create New Product
      </h2>

      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
             px-3 text-white focus:outline-none focus:ring-2
            focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="e.g., IPhone16"
            required
          />
        </div>
        <div>
          <label
            htmlFor="brand"
            className="block text-sm font-medium text-gray-300"
          >
            Product Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
             px-3 text-white focus:outline-none focus:ring-2
            focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="e.g., Samsung"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
             py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 
             focus:border-emerald-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-300"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md
             shadow-sm py-2 px-3 text-white focus:outline-none 
             focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select a category</option>

            <option>Smartphone</option>
            <option>Laptop</option>
            <option>Tablet</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-300"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            step="1"
            min="0"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
            py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500
             focus:border-emerald-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-300"
          >
            Stock
          </label>
          <input
            type="number"
            id="price"
            name="Stock"
            step="1"
            min="0"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm 
            py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500
             focus:border-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          className="  w-full flex justify-center py-2 px-4 border border-transparent rounded-md 
					shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
        >
          <>
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Product
          </>
        </button>
      </form>
    </motion.div>
  );
};

export default AddProduct;
