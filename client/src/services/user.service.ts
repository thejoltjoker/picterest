import { GetFavoritesResponse } from "../models/GetFavoritesResponse";
import { ImageItem } from "../models/ImageItem";
import { User } from "../models/User";
import { get, post, put, remove } from "./http.service";

export const userId = "65c5e43412ebb6ed53265ab9";

export class Endpoint {
  public static baseUrl = "http://localhost:3000/api/";
  public static createUser: string = `${Endpoint.baseUrl}user`;

  constructor() {}

  public static search(query: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(query)}`;
  }

  public static getUser(userId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}`;
  }

  public static updateUser(userId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}`;
  }

  public static removeUser(userId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}`;
  }

  public static getFavorites(userId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}/favorites`;
  }

  public static createFavorite(userId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}/favorites`;
  }

  public static updateFavorite(userId: string, imageId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}/favorites/${encodeURIComponent(imageId)}`;
  }

  public static removeFavorite(userId: string, imageId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}/favorites/${encodeURIComponent(imageId)}`;
  }
}

export const getUser = async (userId: string) => {
  try {
    const response = await get<User>(Endpoint.getUser(userId));
    return response;
  } catch (error) {
    console.error("Error while getting user");
    throw error;
  }
};

export const createUser = async (user: User) => {
  // TODO Add validation
  try {
    const response = await post<User>(
      Endpoint.createUser,
      JSON.stringify(user),
    );
    return response;
  } catch (error) {
    console.error("Error while creating user");
    throw error;
  }
};

export const updateUser = async (user: User) => {
  // TODO Add validation
  try {
    if (!user.userId) throw new Error("No user id on given user");

    const response = await put<User>(
      Endpoint.updateUser(user.userId),
      JSON.stringify(user),
    );
    return response;
  } catch (error) {
    console.error("Error while updating user");
    throw error;
  }
};

export const removeUser = async (userId: string) => {
  try {
    const response = await remove<User>(Endpoint.removeUser(userId));
    return response;
  } catch (error) {
    console.error("Error while removing user");
    throw error;
  }
};

export const getFavorites = async (userId: string): Promise<ImageItem[]> => {
  try {
    const response = await get<GetFavoritesResponse>(
      Endpoint.getFavorites(userId),
    );
    console.log(response);
    return response.favorites;
  } catch (error) {
    console.error("Error while getting favorites");
    throw error;
  }
};

export const createFavorite = async (userId: string, image: ImageItem) => {
  // TODO Add validation
  try {
    const response = await post<ImageItem>(
      Endpoint.createFavorite(userId),
      JSON.stringify(image),
    );
    return response;
  } catch (error) {
    console.error("Error while creating favorite");
    throw error;
  }
};

export const updateFavorite = async (userId: string, image: ImageItem) => {
  // TODO Add validation
  try {
    const response = await put<ImageItem>(
      Endpoint.updateFavorite(userId, image.imageId),
      JSON.stringify(image),
    );
    return response;
  } catch (error) {
    console.error("Error while updating favorite");
    throw error;
  }
};

export const removeFavorite = async (userId: string, imageId: string) => {
  try {
    const response = await remove(Endpoint.removeFavorite(userId, imageId));
    return response;
  } catch (error) {
    console.error("Error while removing favorite");
    throw error;
  }
};
