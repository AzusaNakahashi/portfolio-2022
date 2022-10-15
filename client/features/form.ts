import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const postForm = createAsyncThunk(
  "/email/send",
  async (form: Form, thunkAPI) => {
    const response = await fetch("http://localhost:5000/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(form),
    });
    return response;
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
      console.log(action.payload);
      state.status = "REJECTED";
    });
  },
});

export default formSlice.reducer;
