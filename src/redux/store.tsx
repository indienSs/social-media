import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/users";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
