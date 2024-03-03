import { Dispatch, createContext, useContext } from "react";
import { ImageItem } from "../models/ImageItem";
import { FavoritesAction } from "../reducers/FavoritesReducer";

interface FavoritesContextModel {
  favorites: ImageItem[];
  dispatch: Dispatch<FavoritesAction>;
}

export const FavoritesContext = createContext<FavoritesContextModel>({
  favorites: [],
  dispatch: () => {},
});

export const useFavoritesContext = () => useContext(FavoritesContext);
