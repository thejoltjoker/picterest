import { ImageItem } from "../models/ImageItem";
import { User } from "../models/User";
import { read } from "./database";
import { update as updateUser } from "./user.service";

export const get = async (userId: string): Promise<ImageItem[]> => {
  const database = await read();
  const user = database?.users.find((u) => u.userId === userId);
  if (!user) return [];
  return user.favorites;
};

export const create = async (
  userId: string,
  image: ImageItem
): Promise<ImageItem> => {
  const database = await read();
  let user = database?.users.find((u) => u.userId === userId);
  if (!user) {
    user = new User(userId, []);
  }

  const existingFavorite = user.favorites.find((img) => img.id === image.id);
  if (existingFavorite) {
    return existingFavorite;
  }
  user.favorites.push(image);
  console.log(user);
  await updateUser(userId, user);

  return image;
};

export const update = async (
  userId: string,
  favorite: ImageItem
): Promise<ImageItem> => {
  const database = await read();
  let user = database?.users.find((u) => u.userId === userId);
  if (!user) {
    user = new User(userId, []);
  }

  user.favorites = user.favorites.map((img) =>
    img.link === favorite.link ? favorite : img
  );

  await updateUser(userId, user);

  return favorite;
};

export const remove = async (
  userId: string,
  imageId: string
): Promise<boolean | undefined> => {
  const database = await read();
  const user = database?.users.find((u) => u.userId === userId);
  if (!user) return;

  user.favorites = user.favorites.filter((img) => img.id != imageId);

  await updateUser(userId, user);
  return true;
};
