import { loginData } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const login: any = createAsyncThunk(
    "auth/login",
    async (data: loginData, { rejectWithValue, fulfillWithValue, dispatch }: any) => {
        try {

            const response = await axios({
                method: "POST",
                url: `http://localhost:3001/api/auth/login`,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log('response: ', response);
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

export const getUserList: any = createAsyncThunk(
    "user/get-userlist",
    async (data: any, { rejectWithValue, fulfillWithValue, dispatch }: any) => {
        try {

            const response = await axios({
                method: "GET",
                url: `https://dummyjson.com/users`,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log('response: ', response);
            if (response.status === 200) {
                return fulfillWithValue(response?.data?.users);
            } else {
                return rejectWithValue();
            }
        } catch (err) {
            return rejectWithValue();
        }
    }
);