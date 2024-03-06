import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useReducer } from "react";
import { Outlet } from "react-router-dom";
import { Md5 } from "ts-md5";
import Sidebar from "../components/Sidebar";
import { FavoritesContext } from "../contexts/FavoritesContext";
import {
  FavoritesActionType,
  FavoritesReducer,
} from "../reducers/FavoritesReducer";
import { getFavorites } from "../services/favorites.service";

const SidebarLayout = () => {
  const { user, isAuthenticated } = useAuth0();
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
    if (
      favorites.length == 1 &&
      favorites[0].imageId === "initial" &&
      isAuthenticated
    ) {
      const fetchUser = async () => {
        try {
          const userId = user?.email ? Md5.hashStr(user?.email) : "";

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
    <main className="min-h-screen">
      <FavoritesContext.Provider value={{ favorites, dispatch }}>
        <Sidebar />
        <div className="min-h-screen p-4 sm:ml-64 sm:p-8">
          <Outlet />
        </div>
      </FavoritesContext.Provider>
    </main>
  );
};

export default SidebarLayout;
