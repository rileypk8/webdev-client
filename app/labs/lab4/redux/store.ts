import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./helloReducer";
import counterReducer from "./counterReducer";

export const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
