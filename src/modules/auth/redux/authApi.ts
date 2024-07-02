import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginData } from "../../../types";
import { toast } from "react-toastify";

export const login = createAsyncThunk(
    "auth/login",
    async (data: loginData, { rejectWithValue, fulfillWithValue, dispatch }: any) => {
        try {
            const response = await axios({
                method: "POST",
                url: `api/auth/login`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                toast.success(response?.data?.message);
                return fulfillWithValue(response?.data);
            } else {
                toast.error(response?.data?.message);
                return rejectWithValue();
            }
        } catch (err) {
            return rejectWithValue();
        }
    }
);

export const getUserList = createAsyncThunk(
    "user/get-userlist",
    async ({ rejectWithValue, fulfillWithValue, dispatch }: any) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://dummyjson.com/users`,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                return fulfillWithValue(response?.data);
            } else {
                return rejectWithValue();
            }
        } catch (err) {
            return rejectWithValue();
        }
    }
);