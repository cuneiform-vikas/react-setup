import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../modules/auth/redux/authSlice";
import { apiSlice } from "../modules/auth/redux/apiSlice";

const rootReducer: any = combineReducers({
  auth: authSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
