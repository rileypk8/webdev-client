import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./helloReducer";

export const store = configureStore({
  reducer: {
    helloReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
