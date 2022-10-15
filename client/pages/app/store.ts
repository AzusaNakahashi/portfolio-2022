import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import buttonReducer from "../../features/buttons";
import formReducer from "../../features/form";

export const store = configureStore({
  reducer: {
    form: formReducer,
    buttons: buttonReducer,
  },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
