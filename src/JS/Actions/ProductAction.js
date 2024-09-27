import { GET_PRODUCT_FAIL, GET_PRODUCT_LOAD, GET_PRODUCT_SUCCESS } from "../ActionTypes/ProductActionTypes";
import axios from "axios";

export const getProducts=()=>  async (dispatch)=> {
    dispatch({type:GET_PRODUCT_LOAD});
    try {
        const result = await axios.get('/api/products/getProducts');
        dispatch({type: GET_PRODUCT_SUCCESS, payload: result.data})  ;
    } catch (error) {
      dispatch({type:GET_PRODUCT_FAIL,payload:error})  ;
    }
}