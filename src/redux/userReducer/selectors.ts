import { RootState } from "../store";

export const usersSelector = (store: RootState) => store.users.users;
