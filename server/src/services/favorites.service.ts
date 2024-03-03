import { ImageItem } from "../models/ImageItem";
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
): Promise<ImageItem | undefined> => {
  const database = await read();
  const user = database.users.find((u) => u.userId === userId);
  if (!user) return;

  const existingFavorite = user.favorites.find(
    (img) => img.imageId === image.imageId
  );
  if (existingFavorite) {
    return existingFavorite;
  }
  const newFavorite = image;
  user.favorites.push(newFavorite);
  await updateUser(user);

  return newFavorite;
};

export const update = async (
  userId: string,
  favorite: ImageItem
): Promise<ImageItem | undefined> => {
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
  imageId: string
): Promise<boolean | undefined> => {
  const database = await read();
  const user = database.users.find((u) => u.userId === userId);
  if (!user) return;

  user.favorites = user.favorites.filter((img) => img.imageId != imageId);

  await updateUser(user);
  return true;
};
