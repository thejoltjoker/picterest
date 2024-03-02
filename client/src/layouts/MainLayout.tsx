import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserContext } from "../contexts/UserContext";

import { Auth0Provider } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { User } from "../models/User";
import { UserActionType, UserReducer } from "../reducers/UserReducer";

const MainLayout = () => {
  const [user, userDispatch] = useReducer(UserReducer, {
    userId: "0",
    email: "",
    favorites: [],
  });

  useEffect(() => {
    if (user.userId != "0") return;
    let ignore = false;
    const fetchUser = async () => {
      try {
        const userId = "1";
        const url = `http://localhost:3000/api/user/${userId}`;
        const response = await axios.get<User>(url);
        if (response && !ignore) {
          console.log(response.data);
          userDispatch({
            type: UserActionType.SET,
            payload: { ...response.data },
          });
        }
      } catch (error) {
        console.error("Error when getting user.");
      }
    };
    fetchUser();
    return () => {
      ignore = true;
    };
  });
  return (
    <div>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <UserContext.Provider value={{ user, dispatch: userDispatch }}>
          <Navbar />
          <Outlet />
        </UserContext.Provider>
      </Auth0Provider>
    </div>
  );
};

export default MainLayout;
