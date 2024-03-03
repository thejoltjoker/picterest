import { Dispatch, createContext, useContext } from "react";
import { User } from "../models/User";
import { UserAction } from "../reducers/UserReducer";

interface UserContextModel {
  user: User | null;
  dispatch: Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextModel>({
  user: null,
  dispatch: () => {},
});

export const useUserContext = () => useContext(UserContext);
