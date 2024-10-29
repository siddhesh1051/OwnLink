// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/redux/api/apiSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
