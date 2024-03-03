import { UserFavorite } from "./UserFavorite";

export interface User {
  userId?: string;
  email: string;
  favorites: UserFavorite[];
}
