import { createSlice } from "@reduxjs/toolkit";
import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "../../../types";
import { getUserList, login } from "./authApi";

const initialState: IAuthState = {
    authLoading: false,
    token: null,
    email: "",
    userList: []
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        isAuthLoadingToggle: (state, action) =>
        (state = {
            ...state,
            authLoading: action.payload,
        }),
        setUseremail: (state, action) =>
        (state = {
            ...state,
            email: action.payload,
        }),
        defaultLogout: (state, action) =>
        (state = {
            ...state,
            authLoading: false,
            token: null,
        }),
    },
    extraReducers: (builder: ActionReducerMapBuilder<IAuthState>) => {
        builder.addCase(login.pending, (state, action) => {
            state.authLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
            state.token = action.payload.token;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.authLoading = false;
        });
        builder.addCase(getUserList.pending, (state, action) => {
            state.authLoading = true;
        });
        builder.addCase(getUserList.fulfilled, (state, action: PayloadAction<any>) => {
            state.userList = action.payload;
        });
        builder.addCase(getUserList.rejected, (state, action) => {
            state.authLoading = false;
        });
    }
});

export const { isAuthLoadingToggle } = authSlice.actions;
export default authSlice.reducer;