import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SERVER_URI = "http://localhost:5000";
const config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
};

export const postForm = createAsyncThunk(
  "/email/send",
  async (form: Form, thunkAPI) => {
    const formData = JSON.stringify(form);
    try {
      const response = await axios.post(
        `http://localhost:5000/email/send`,
        formData,
        config
      );
      return response.data;
    } catch (err) {
      return err;
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
      console.log(action.payload);
      state.status = "SUCCESS";
    });
    builder.addCase(postForm.rejected, (state, action) => {
      console.log(action);
      state.status = "REJECTED";
    });
  },
});

export default formSlice.reducer;
