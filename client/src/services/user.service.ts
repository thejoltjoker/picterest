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

  public static updateFavorite(userId: string, favoriteId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}/favorites/${encodeURIComponent(favoriteId)}`;
  }

  public static removeFavorite(userId: string, favoriteId: string) {
    return `${Endpoint.baseUrl}user/${encodeURIComponent(userId)}/favorites/${encodeURIComponent(favoriteId)}`;
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
