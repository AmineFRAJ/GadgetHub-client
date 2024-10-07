import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";
import UserReducer from "./UserReducer";
import CartReducer from "./CartReducer";
 


const rootReducer = combineReducers({ProductReducer,AuthReducer,UserReducer, CartReducer})

export default rootReducer