import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./addReducer";
export const store = configureStore({
  reducer: {
    add: addReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
