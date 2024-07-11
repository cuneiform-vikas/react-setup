import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
