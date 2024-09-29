import { motion } from "framer-motion";
import { Ellipsis } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../JS/Actions/ProductAction";
import { Link} from "react-router-dom";
import Spinner from "../components/Spinner";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

const ProductsList = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.ProductReducer.products);
  const load = useSelector((state) => state.ProductReducer.load);

  useEffect(() => {
    dispatch(getProducts());

    return () => {};
  }, [dispatch]);

 

  return (
    <motion.div
      className="bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {load && (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      )}
      <table className=" min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Product
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Category
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Details
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Edit
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Delete
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {products?.map((product) => (
            <tr key={product._id} className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={product.image}
                      alt={product.model}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white hidden sm:block">
                      {product.model}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">
                  {product.category.toUpperCase(0)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  to={`/productdetails/${product._id}`}
                  className="text-white hover:text-blue-500"
                >
                  <Ellipsis />
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <EditProduct/>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <DeleteProduct id={product._id} model={product.model}  brand={product.brand}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};
export default ProductsList;
