import {
    
  } from "../ActionTypes/ProductActionTypes";
import { GET_USER_FAIL, GET_USER_LOAD, GET_USER_SUCCESS } from "../ActionTypes/UserActionType";
  
  const initialState = {
    load: false,
    success: null,
    error: null,
    users: [],
   
  };
  
  const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_USER_LOAD:
        return { ...state, load: true };
  
      case GET_USER_SUCCESS:
        return {
          ...state,
          load: false,
          success: true,
          error: null,
          users: payload,
        };
  
      case GET_USER_FAIL:
        return { ...state, success: null, load: false, error: payload };
   
  
   
  
      default:
        return state;
    }
  };
  export default UserReducer;
  