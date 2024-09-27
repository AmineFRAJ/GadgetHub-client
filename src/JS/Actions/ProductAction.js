import { GET_PRODUCT_FAIL, GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS, GET_PRODUCTBYID_FAIL, GET_PRODUCTBYID_LOAD, GET_PRODUCTBYID_SUCCESS } from "../ActionTypes/ProductActionTypes";
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
    dispatch({type:GET_PRODUCTBYID_FAIL,payload:error})  ;
  }
}