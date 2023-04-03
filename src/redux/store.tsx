import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/users";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
