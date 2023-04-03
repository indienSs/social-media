import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/userType";
import { RootState } from "../store";

type UsersType = {
  users: User[];
};

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
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { setUsers, setComment, addUser } = usersSlice.actions;

export const usersSelector = (store: RootState) => store.users.users;

export default usersSlice.reducer;
