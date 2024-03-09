import { ImageItem } from "../models/ImageItem";

export enum FavoritesActionType {
  Set,
  Add,
  Remove,
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
    case FavoritesActionType.Remove: {
      const idsToRemove = action.payload.map((img) => img.id);
      return favorites.filter((img) => !idsToRemove.includes(img.id));
    }
  }
  throw new Error("Unknown action: " + action.type);
};
