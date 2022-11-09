import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_URI;
const config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

export const postForm = createAsyncThunk(
  "/email/send",
  async (form: Form, thunkAPI) => {
    const formJsonData = JSON.stringify(form);
    try {
      const response = await axios.post(
        `${SERVER_URI}/email/send`,
        formJsonData,
        config
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("different error than axios");
      }
    }
  }
);

interface FormState {
  status: string;
}

const initialState: FormState = {
  status: "IDLE",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postForm.pending, (state, action) => {
      state.status = "PENDING";
    });
    builder.addCase(postForm.fulfilled, (state, action) => {
      state.status = "SUCCESS";
    });
    builder.addCase(postForm.rejected, (state, action) => {
      state.status = "REJECTED";
    });
  },
});

export default formSlice.reducer;
