import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCTBYID_FAIL,
  GET_PRODUCTBYID_LOAD,
  GET_PRODUCTBYID_SUCCESS,
} from "../ActionTypes/ProductActionTypes";

const initialState = {
  load: false,
  success: null,
  error: null,
  products: [],
  product:{},
}

const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOAD:
      return { ...state, load: true };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        error: null,
        products: payload,
      };

    case GET_PRODUCT_FAIL:
      return { ...state, success:null,load: false, error: payload };

      case GET_PRODUCTBYID_LOAD:
        return { ...state, load: true };
  
      case GET_PRODUCTBYID_SUCCESS:
        return {
          ...state,
          load: false,
          success: true,
          error: null,
          product: payload,
        };
  
      case GET_PRODUCTBYID_FAIL:
        return { ...state, success:null,load: false, error: payload };

    default:
     return  state;
  }
};
export default ProductReducer;
