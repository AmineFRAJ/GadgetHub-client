import {
  ADD_TOCART_FAIL,
  ADD_TOCART_LOAD,
  ADD_TOCART_SUCCESS,
  CLEAR_CART_FAIL,
  CLEAR_CART_LOAD,
  CLEAR_CART_SUCCESS,
  REMOVE_FROMCART_FAIL,
  REMOVE_FROMCART_LOAD,
  REMOVE_FROMCART_SUCCESS,
} from "../ActionTypes/AddToCartActionTypes";

//  add   to cart
export const addToCart = (product) => (dispatch) => {
  dispatch({ type: ADD_TOCART_LOAD });

  try {
    dispatch({
      type: ADD_TOCART_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: ADD_TOCART_FAIL,
      payload: error.message,
    });
  }
};

//   remove   from cart
export const removeFromCart = (productId) => (dispatch) => {
  dispatch({ type: REMOVE_FROMCART_LOAD });

  try {
    dispatch({
      type: REMOVE_FROMCART_SUCCESS,
      payload: productId,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_FROMCART_FAIL,
      payload: error.message,
    });
  }
};
//clear
export const clearCart = () => (dispatch) => {
    dispatch({ type: CLEAR_CART_LOAD });

    try {
        dispatch({
            type: CLEAR_CART_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: CLEAR_CART_FAIL,
            payload: error.message,
        });
    }
};
