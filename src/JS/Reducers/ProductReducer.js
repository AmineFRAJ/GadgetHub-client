import {
  GET_PRODUCT_FAIL,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCCESS,
} from "../ActionTypes/ProductActionTypes";

const initialState = {
  load: false,
  success: null,
  error: null,
  products: [],
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

    default:
     return  state;
  }
};
export default ProductReducer;
