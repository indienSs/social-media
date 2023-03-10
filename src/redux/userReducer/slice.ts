import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/userType";
import { UsersType } from "./types";

const initialState: UsersType = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
