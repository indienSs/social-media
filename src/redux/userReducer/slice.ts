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
    setComment: (
      state,
      action: PayloadAction<{ id: string; comment: string }>
    ) => {
      const user = state.users.find((user) => user.id === action.payload.id);
      user?.comments.push(action.payload.comment);
    },
  },
});

export const { setUsers, setComment } = usersSlice.actions;

export default usersSlice.reducer;
