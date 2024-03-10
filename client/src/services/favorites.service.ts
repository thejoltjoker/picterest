import { GetFavoritesResponse } from "../models/GetFavoritesResponse";
import { ImageItem } from "../models/ImageItem";
import { imageItemSchema } from "../schemas/imageItem.schema";
import { isValid } from "../utils/validation";
import { get, post, put, remove } from "./http.service";
import { Endpoint } from "./user.service";

export const getFavorites = async (userId: string): Promise<ImageItem[]> => {
  try {
    const response = await get<GetFavoritesResponse>(
      Endpoint.getFavorites(userId),
    );

    return response.data.favorites;
  } catch (error) {
    console.error("Error while getting favorites");
    throw error;
  }
};

export const createFavorite = async (userId: string, image: ImageItem) => {
  try {
    if (!isValid(image, imageItemSchema)) throw new Error("Invalid data");

    const response = await post<ImageItem>(
      Endpoint.createFavorite(userId),
      JSON.stringify(image),
    );
    return response.data;
  } catch (error) {
    console.error("Error while creating favorite");
    throw error;
  }
};

export const updateFavorite = async (userId: string, image: ImageItem) => {
  try {
    if (!isValid(image, imageItemSchema)) throw new Error("Invalid data");

    const response = await put<ImageItem>(
      Endpoint.updateFavorite(userId, image.imageId),
      JSON.stringify(image),
    );
    return response.data;
  } catch (error) {
    console.error("Error while updating favorite");
    throw error;
  }
};

export const removeFavorite = async (userId: string, imageId: string) => {
  try {
    const response = await remove(Endpoint.removeFavorite(userId, imageId));
    return response.data;
  } catch (error) {
    console.error("Error while removing favorite");
    throw error;
  }
};
