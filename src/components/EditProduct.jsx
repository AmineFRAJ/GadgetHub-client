import { Cog, Pencil } from "lucide-react";
import React, {  useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
 
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getProductsById } from "../JS/Actions/ProductAction";

const EditProduct = ({id}) => {
  
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductReducer.product);
  const [newProduct, setNewProduct] = useState(product);
 

 
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleClick=()=>{
    console.log(id)
    dispatch(getProductsById(id));
    setOpen(true);
    
  };
  const handleEdit = () => {
    dispatch(editProduct({ id, newProduct }));
    setOpen(false);
  };

  return (
    <div>
      {/* Button to open the dialog */}
      <button
        className="text-white hover:text-emerald-300"
        onClick={() => handleClick()} 
      >
        <Cog className="h-5 w-5" />
      </button>

      {/* Dialog component */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:max-w-lg"
              style={{ zIndex: 60 }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleEdit();
                }}
              >
                <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 sm:mx-0 sm:h-10 sm:w-10">
                      <Pencil
                        aria-hidden="true"
                        className="h-6 w-6 text-emerald-700"
                      />
                    </div>

                    <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-2xl font-semibold mb-6 text-emerald-300"
                      >
                        Edit Product
                      </DialogTitle>

                      <div className="mt-2 w-full">
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
                            placeholder={product.model}
                            
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="brand"
                            className=" mt-2 block text-sm font-medium text-gray-300"
                          >
                            Product Brand
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            id="brand"
                            name="brand"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder={product.brand}
                            
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="image"
                            className="mt-2 block text-sm font-medium text-gray-300"
                          >
                            Product Image URL
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            id="image"
                            name="image"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder={product.image}
                           
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="category"
                            className="mt-2 block text-sm font-medium text-gray-300"
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
                            
                          >
                            <option value="">{product.category}</option>

                            <option>smartphone</option>
                            <option>laptop</option>
                            <option>tablet</option>
                          </select>
                        </div>

                        <div>
                          <label
                            htmlFor="releaseDate"
                            className=" mt-2 block text-sm font-medium text-gray-300"
                          >
                            Release Date
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                           
                            type="date"
                            id="releaseDate"
                            name="releaseDate"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                            
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="description"
                            className="mt-2 block text-sm font-medium text-gray-300"
                          >
                            Description
                          </label>
                          <textarea
                            onChange={(e) => handleChange(e)}
                            placeholder={product.description}
                            id="description"
                            name="description"
                            rows="3"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm
             py-2 px-3 text-white focus:outline-none  focus:ring-emerald-500 
             focus:border-emerald-500"
                            
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="price"
                            className="mt-2 block text-sm font-medium text-gray-300"
                          >
                            Price
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                            placeholder={product.price}
                            type="number"
                            id="price"
                            name="price"
                            step="1"
                            min="0"
                            className="block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                            
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="stock"
                            className="mt-2 block text-sm font-medium text-gray-300"
                          >
                            Stock
                          </label>
                          <input
                            onChange={(e) => handleChange(e)}
                            placeholder={product.stock}
                            type="number"
                            id="stock"
                            name="stock"
                            step="1"
                            min="0"
                            className=" mb-2 block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                             
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dialog footer buttons */}
                <div className=" bg-gray-500 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    
                    className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 sm:ml-3 sm:w-auto"
                  >
                    Edit
                  </button>

                  
                  <button
                    type="button"
                    data-autofocus
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default EditProduct;
