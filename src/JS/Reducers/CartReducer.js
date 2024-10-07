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

const initialState = {
  cartItems: [],
  load: false,
  error: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOCART_LOAD:
    case REMOVE_FROMCART_LOAD:
    case CLEAR_CART_LOAD:
      return {
        ...state,
        load: true,
        error: null,
      };
    case ADD_TOCART_SUCCESS:
      console.log("Current cart items:", state.cartItems);
       
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      return {
        ...state,
        load: false,
         
        cartItems: existingItem
          ? state.cartItems.map((item) =>
              item._id === action.payload._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROMCART_SUCCESS:
      return {
        ...state,
        load: false,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload),
      };
    case CLEAR_CART_SUCCESS:
      return {
        ...state,
        load: false,
        cartItems: [],
      };
    case ADD_TOCART_FAIL:
    case REMOVE_FROMCART_FAIL:
    case CLEAR_CART_FAIL:
      return {
        ...state,
        load: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default CartReducer;
