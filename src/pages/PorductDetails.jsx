import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../JS/Actions/ProductAction";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Tooltip } from "antd";
import Spinner from "../components/Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductReducer.product);
  const navigate = useNavigate();
  const load =useSelector((state) => state.ProductReducer.load);

  useEffect(() => {
    dispatch(getProductsById(id));
  }, [dispatch, id]);

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 md:mb-32 ">
      {
        load && (
          <div className="flex justify-center items-center h-screen">
          <Spinner/>
          </div>
        )
      }
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mt-6  text-center text-3xl font-extrabold text-emerald-400">
          Product Information
        </h2>
      </motion.div>

      <motion.div
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mx-4 rounded-lg bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
          <div className="flex flex-col md:flex-row md:items-center">
            {/* Image Section */}
            <div className="relative md:w-1/2 mb-6 md:mb-0 ">
              <img
                className="object-cover w-full h-80 md:mb-4 rounded-lg"
                src={product.image}
                alt={product.model}
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg" />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 px-6">
              <input
                type="text"
                className="text-xl font-semibold tracking-tight text-white bg-transparent mb-4"
                value={`Brand: ${product.brand}`}
                readOnly
              />
              <h5 className="text-xl font-semibold tracking-tight text-white mb-2">
                Model: {product.model}
              </h5>
              <hr className="border-t-2 border-emerald-500 mb-2" />
              <h5 className="text-xl font-semibold tracking-tight text-white mb-2">
                Release Date:{" "}
                {new Date(product.releaseDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h5>
              <h5 className="text-xl tracking-tight text-white mb-4">
                Description: {product.description}
              </h5>
              <h5 className="text-xl font-bold text-white mb-2">
                Price: ${product.price}
              </h5>
              <h5 className="text-xl tracking-tight text-white">
                Product in Stock: {product.stock}
              </h5>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back Button */}
      <div className="flex justify-center gap-4 mt-4">
        <Tooltip title="Back">
          <button
            className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
            onClick={() => navigate(-1)}
          >
            <RotateCcw />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ProductDetails;
