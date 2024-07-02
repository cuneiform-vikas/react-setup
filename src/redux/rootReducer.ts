import { combineReducers } from "@reduxjs/toolkit"
import authSlice from "../modules/auth/redux/authSlice"

const rootReducer:any = combineReducers({
    auth: authSlice
})

export default rootReducer
