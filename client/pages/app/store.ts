import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import buttonReducer from "../../features/buttons";

export const store = configureStore({
  reducer: {
    buttons: buttonReducer,
  },
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
