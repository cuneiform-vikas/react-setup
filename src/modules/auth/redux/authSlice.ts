import { createSlice } from "@reduxjs/toolkit";
import { getUserList, login } from "./authApi";
import { IAuthState } from "@/types";

const initialState: IAuthState = {
    loadingState: false,
    token: null,
    userList: []
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        defaultLogout: (state, action) =>
        (state = {
            ...state,
            loadingState: false,
            token: null,
        }),
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loadingState = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loadingState = false;
        });
        builder.addCase(getUserList.pending, (state, action) => {
            state.loadingState = true;
        });
        builder.addCase(getUserList.fulfilled, (state, action) => {
            state.userList = action.payload;
            state.loadingState = false;
        });
        builder.addCase(getUserList.rejected, (state, action) => {
            state.loadingState = false;
        });
    }
});

export const { defaultLogout } = authSlice.actions;
export default authSlice.reducer;