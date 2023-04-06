import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/userType";
import { RootState } from "../store";
import axios from "../../assets/axios";

type UsersType = {
  users: User[];
  status: Status;
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const initialState: UsersType = {
  users: [],
  status: Status.LOADING,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get<User[]>("");
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = Status.LOADING;
      state.users = [];
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.status = Status.SUCCESS;
        state.users = action.payload;
      }
    );
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = Status.ERROR;
      state.users = [];
    });
  },
});

export const { setComment, addUser } = usersSlice.actions;

export const usersSelector = (store: RootState) => store.users.users;
export const statusSelector = (store: RootState) => store.users.status;

export const usersReducer = usersSlice.reducer;
