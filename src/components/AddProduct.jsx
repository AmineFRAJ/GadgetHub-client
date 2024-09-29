import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../JS/Actions/ProductAction";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({});
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(addProduct({ newProduct, navigate }));
  };
  console.log(newProduct);
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

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Product Name
          </label>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            id="model"
            name="model"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
             px-3 text-white focus:outline-none  
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
            onChange={(e) => handleChange(e)}
            type="text"
            id="brand"
            name="brand"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2
             px-3 text-white focus:outline-none  
            focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="e.g., Samsung"
            required
          />
        </div>
        <div>
          <label
            htmlFor="releaseDate"
            className="block text-sm font-medium text-gray-300"
          >
            Release Date
          </label>
          <input
            onChange={handleChange}
            type="date"
            id="releaseDate"
            name="releaseDate"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
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
            onChange={(e) => handleChange(e)}
            id="description"
            name="description"
            rows="3"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
             py-2 px-3 text-white focus:outline-none  focus:ring-emerald-500 
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
            onChange={(e) => handleChange(e)}
            id="category"
            name="category"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md
             shadow-sm py-2 px-3 text-white focus:outline-none 
              focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select a category</option>

            <option>smartphone</option>
            <option>laptop</option>
            <option>tablet</option>
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
            onChange={(e) => handleChange(e)}
            type="number"
            id="price"
            name="price"
            step="1"
            min="0"
            className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
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
            onChange={(e) => handleChange(e)}
            type="number"
            id="stock"
            name="stock"
            step="1"
            min="0"
            className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-300"
          >
            Product Image URL
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="image"
            name="image"
            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
            placeholder="e.g., https://example.com/image.jpg"
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
