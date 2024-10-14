import { GET_USER_FAIL, GET_USER_LOAD, GET_USER_SUCCESS } from "../ActionTypes/UserActionType";
import axios from "axios";

//get USERs action
export const getUsers= () => async (dispatch) => {
    dispatch({ type: GET_USER_LOAD });
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/getUsers`);
      dispatch({ type: GET_USER_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_USER_FAIL, payload: error });
    }
  };
  