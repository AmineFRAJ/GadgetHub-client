 
import { ADD_PRODUCT_FAIL, ADD_PRODUCT_LOAD, ADD_PRODUCT_SUCCESS, DELETE_PRODUCTBYID_FAIL, DELETE_PRODUCTBYID_LOAD, DELETE_PRODUCTBYID_SUCCESS, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_LOAD, EDIT_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCTBYID_FAIL, GET_PRODUCTBYID_LOAD, GET_PRODUCTBYID_SUCCESS } from "../ActionTypes/ProductActionTypes";
import axios from "axios";
//get production action 
export const getProducts=()=>  async (dispatch)=> {
    dispatch({type:GET_PRODUCT_LOAD});
    try {
        const result = await axios.get('/api/products/getProducts');
        dispatch({type: GET_PRODUCT_SUCCESS, payload: result.data})  ;
    } catch (error) {
      dispatch({type:GET_PRODUCT_FAIL,payload:error})  ;
    }
}

// get product  by id action 
export const getProductsById=(id)=>  async ( dispatch)=> {
  dispatch({type:GET_PRODUCTBYID_LOAD});
  try {
      const result = await axios.get(`/api/products/getProductById/${id}`);
      dispatch({type: GET_PRODUCTBYID_SUCCESS, payload: result.data})  ;
  } catch (error) {
    console.log(error.message)
    dispatch({type:GET_PRODUCTBYID_FAIL,payload:error})  ;
  }
}



// Delete product  by id action 
export const deleteProductById=({id,navigate})=>  async ( dispatch)=> {
  dispatch({type:DELETE_PRODUCTBYID_LOAD });
  try {
      const result = await axios.delete(`/api/products/deleteProduct/${id}`);
      dispatch({type: DELETE_PRODUCTBYID_SUCCESS, payload: result.data})  ;
      navigate(0) 
      
  } catch (error) {
    console.log(error.message);
    dispatch({type:DELETE_PRODUCTBYID_FAIL,payload:error})  ;
  }
}

// add Product action
export const addProduct = ({newProduct, navigate}) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_LOAD });
  try {
    const result = await axios.post("/api/products/addProduct", newProduct);
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: result.data });
    navigate(0)
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: error });
  }
};


// Edit Product action 
export const editProduct = ({id, newProduct,navigate}) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT_LOAD });
  try {
    const result = await axios.put(`/api/products/editProduct/${id}`, newProduct);
    dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: result.data });
    dispatch(getProductsById(id));
    navigate(0)
  
  } catch (error) {
    console.log(error.message);
    dispatch({ type: EDIT_PRODUCT_FAIL, payload: error });
  }
};