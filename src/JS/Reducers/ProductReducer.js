import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_LOAD,
  ADD_PRODUCT_SUCCESS,
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

const initialState = {
  load: false,
  success: null,
  error: null,
  products: [],
  product: {},
  deletedProduct: {},
};

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
      return { ...state, success: null, load: false, error: payload };

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
      return { ...state, success: null, load: false, error: payload };

    case DELETE_PRODUCTBYID_LOAD:
      return { ...state, load: true };

    case DELETE_PRODUCTBYID_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,

        deletedProduct: payload,
      };

    case DELETE_PRODUCTBYID_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case ADD_PRODUCT_LOAD:
      return { ...state, load: true };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        error: null,
        product: payload,
      };

    case ADD_PRODUCT_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case EDIT_PRODUCT_LOAD:
      return { ...state, load: true };

    case EDIT_PRODUCT_SUCCESS:
      return { ...state, load: false, success: true };

    case EDIT_PRODUCT_FAIL:
      return { ...state, success: null, load: false, error: payload };

    default:
      return state;
  }
};
export default ProductReducer;
