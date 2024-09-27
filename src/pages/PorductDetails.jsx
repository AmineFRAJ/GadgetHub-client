import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../JS/Actions/ProductAction";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Tooltip } from "antd";

const PorductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductReducer.product);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProductsById(id));
  }, [dispatch, id]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div
        key={product.id}
        className=" mb-16  flex  md:items-center lg:items-center     flex-col md:flex-row md:mx-60 md:mt-16 rounded-lg border border-gray-700 shadow-lg"
      >
        <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
          <img
            className="object-cover w-full h-80 md:mb-4 rounded-lg "
            src={product.image}
            alt={product.model}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>

        <div className="mt-4 px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            Brand: {product.brand}
          </h5>
          <h5 className="text-xl font-semibold tracking-tight text-white">
            Model: {product.model}
          </h5>
          <h5 className="text-xl font-semibold tracking-tight text-white">
            Release Date: {product.ReleaseDate}
          </h5>
          <h5 className="text-xl  tracking-tight text-white">
            Description: {product.description}
          </h5>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-xl font-bold text-white">
                Price: ${product.price}
              </span>
              <h5 className="text-xl  tracking-tight text-white">
                Product in Stock : {product.stock}
              </h5>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-2 lg:mb-60">
       <Tooltip title="Back"  > <button  className=" rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 " onClick={() => navigate(-1)}>
          <RotateCcw />
        </button>
        </Tooltip>
      </div>
    </motion.div>
  );
};

export default PorductDetails;
