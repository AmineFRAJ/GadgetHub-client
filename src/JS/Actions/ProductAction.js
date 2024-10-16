import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_LOAD,
  ADD_PRODUCT_SUCCESS,
  CLEAR_ERRORS_PRODUCT,
  CLEAR_SUCCESS_PRODUCT,
  DELETE_PRODUCTBYID_FAIL,
  DELETE_PRODUCTBYID_LOAD,
  DELETE_PRODUCTBYID_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_LOAD,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTBYID_FAIL,
  GET_PRODUCTBYID_LOAD,
  GET_PRODUCTBYID_SUCCESS,
} from "../ActionTypes/ProductActionTypes";
import axios from "axios";
//get products action
export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOAD });
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/getProducts`
    );
    console.log(result.data);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};

// get product  by id action
export const getProductsById = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTBYID_LOAD });
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/getProductById/${id}`
    );

    dispatch({ type: GET_PRODUCTBYID_SUCCESS, payload: result.data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: GET_PRODUCTBYID_FAIL, payload: error });
  }
};

// Delete product  by id action
export const deleteProductById =
  ({ id, navigate }) =>
  async (dispatch) => {
    dispatch({ type: DELETE_PRODUCTBYID_LOAD });
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/products/deleteProduct/${id}`
      );

      dispatch({ type: DELETE_PRODUCTBYID_SUCCESS, payload: result.data });
      dispatch(getProducts());
      navigate("/secret-dashboard");
    } catch (error) {
      console.log(error.message);
      dispatch({ type: DELETE_PRODUCTBYID_FAIL, payload: error });
    }
  };

// add Product action
export const addProduct =
  ({ newProduct, navigate }) =>
  async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_LOAD });
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/products/addProduct`,
        newProduct
      );

      dispatch({ type: ADD_PRODUCT_SUCCESS, payload: result.data });
      dispatch(getProducts());
      navigate(0);
    } catch (error) {
      dispatch({ type: ADD_PRODUCT_FAIL, payload: error.response.data.errors });
    }
  };

// Edit Product action
export const editProduct =
  ({ id, newProduct, navigate }) =>
  async (dispatch) => {
    dispatch({ type: EDIT_PRODUCT_LOAD });
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/products/editProduct/${id}`,
        newProduct
      );

      dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: result.data });
      dispatch(getProductsById(id));
      dispatch(getProducts());
      navigate("/secret-dashboard");
    } catch (error) {
      console.log(error.message);
      dispatch({ type: EDIT_PRODUCT_FAIL, payload: error });
    }
  };
// clear errors
export const clearErrorsProduct = () => {
  return {
    type: CLEAR_ERRORS_PRODUCT,
  };
};

// clear success
export const clearSuccessProduct = () => {
  return {
    type: CLEAR_SUCCESS_PRODUCT,
  };
};
