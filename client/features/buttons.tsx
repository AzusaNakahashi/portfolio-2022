import { createSlice } from "@reduxjs/toolkit";

interface ButtonState {
  navIsOpen: boolean;
}

const initialState: ButtonState = {
  navIsOpen: false,
};

export const buttonSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    navToggle: (state) => {
      state.navIsOpen = !state.navIsOpen;
    },
  },
});

export const { navToggle } = buttonSlice.actions;

export default buttonSlice.reducer;
