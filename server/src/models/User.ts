import { UserFavorite } from "./UserFavorite";

export class User {
  constructor(
    public email: string,
    public favorites: UserFavorite[],
    public userId?: string
  ) {}
}
