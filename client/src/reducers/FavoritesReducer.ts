import { ImageItem } from "../models/ImageItem";

export enum FavoritesActionType {
  Set,
  Add,
}

export interface FavoritesAction {
  type: FavoritesActionType;
  payload: ImageItem[];
}

export const FavoritesReducer = (
  favorites: ImageItem[],
  action: FavoritesAction,
) => {
  switch (action.type) {
    case FavoritesActionType.Set: {
      return [...action.payload];
    }
    case FavoritesActionType.Add: {
      return [...favorites, ...action.payload];
    }
  }
  throw new Error("Unknown action: " + action.type);
};
