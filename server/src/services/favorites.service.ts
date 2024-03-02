import { sha1digest } from "../helpers/strings";
import { ImageItem } from "../models/ImageItem";
import { UserFavorite } from "../models/UserFavorite";
import { read } from "./database";
import { update as updateUser } from "./user.service";

export const get = async (userId: string): Promise<ImageItem[] | undefined> => {
  const database = await read();
  const user = database.users.find((u) => u.userId === userId);
  if (!user) return;
  return user.favorites;
};

export const create = async (
  userId: string,
  image: ImageItem
): Promise<UserFavorite | undefined> => {
  const database = await read();
  const user = database.users.find((u) => u.userId === userId);
  if (!user) return;

  const existingFavorite = user.favorites.find(
    (img) => img.link === image.link
  );
  if (existingFavorite) {
    return existingFavorite;
  }
  const newFavorite = { ...image, favoriteId: sha1digest(image.link) };
  user.favorites.push(newFavorite);
  await updateUser(user);

  return newFavorite;
};

export const update = async (
  userId: string,
  favorite: UserFavorite
): Promise<UserFavorite | undefined> => {
  const database = await read();
  const user = database.users.find((u) => u.userId === userId);
  if (!user) return;

  user.favorites = user.favorites.map((img) =>
    img.link === favorite.link ? favorite : img
  );

  await updateUser(user);

  return favorite;
};

export const remove = async (
  userId: string,
  favoriteId: string
): Promise<boolean | undefined> => {
  const database = await read();
  const user = database.users.find((u) => u.userId === userId);
  if (!user) return;

  user.favorites = user.favorites.filter((img) => img.favoriteId != favoriteId);

  await updateUser(user);
  return true;
};
