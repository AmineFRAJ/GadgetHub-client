import { Tooltip } from "antd";
import { motion } from "framer-motion";
import { CircleEllipsis, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { addToCart } from "../JS/Actions/AddToCartAction";

const TabletComponent = ({ products }) => {
  const load = useSelector((state) => state.ProductReducer.load);
  const user = useSelector((state) => state.AuthReducer.user);
  const isAuth = user !== null;  
  const isAdmin = user?.isAdmin;
  console.log(products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {load && (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      )}
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div
            key={product._id} // Ensure this is unique
            className="mb-4 flex w-full md:w-1/2 lg:w-1/3 relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg"
          >
            <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
              <img
                className="object-cover w-full h-80"
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
              <div className="flex justify-between">
              <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!isAuth || isAdmin}  
                  className={`flex items-center justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-emerald-300 ${
                    isAuth && !isAdmin
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart size={22} className="mr-2" />
                  Add to cart
                </button>
                <Tooltip title="Details" placement="bottom">
                  <Link
                    to={`/productdetails/${product._id}`}
                    className="hover:text-blue-500"
                  >
                    <CircleEllipsis />
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TabletComponent;
