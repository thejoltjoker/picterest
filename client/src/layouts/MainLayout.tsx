import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FavoritesContext } from "../contexts/FavoritesContext";

import { Auth0Provider } from "@auth0/auth0-react";
import { useEffect, useReducer } from "react";
import {
  FavoritesActionType,
  FavoritesReducer,
} from "../reducers/FavoritesReducer";
import { getFavorites } from "../services/user.service";

const MainLayout = () => {
  const initialState = [
    {
      imageId: "initial",
      title: "",
      snippet: "",
      contextLink: "",
      link: "",
      thumbnailLink: "",
      thumbnailWidth: 0,
      thumbnailHeight: 0,
    },
  ];
  const [favorites, dispatch] = useReducer(FavoritesReducer, initialState);

  useEffect(() => {
    let ignore = false;
    if (favorites.length == 1 && favorites[0].imageId === "initial") {
      const fetchUser = async () => {
        try {
          const userId = "1";

          const response = await getFavorites(userId);
          if (response && !ignore) {
            dispatch({
              type: FavoritesActionType.Set,
              payload: response,
            });
          }
        } catch (error) {
          console.error("Error when getting user.");
        }
      };
      fetchUser();
    } else {
      return;
    }
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
        <FavoritesContext.Provider value={{ favorites, dispatch }}>
          <Navbar />
          <Outlet />
        </FavoritesContext.Provider>
      </Auth0Provider>
    </div>
  );
};

export default MainLayout;
