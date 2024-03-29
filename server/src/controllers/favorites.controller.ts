import { NextFunction, Request, Response } from "express";

import { ImageItem } from "../models/ImageItem";
import {
  create as createFavorite,
  get as getFavorites,
  remove as removeFavorite,
  update as updateFavorite,
} from "../services/favorites.service";

export const get = async (
  req: Request<{ userId: string }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const favorites = await getFavorites(req.params.userId);
    if (!favorites) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ favorites: favorites });
  } catch (err) {
    console.error(`Error while getting favorites`, err);
    next(err);
  }
};

export const create = async (
  req: Request<{ userId: string }, {}, ImageItem, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const favorite = await createFavorite(req.params.userId, req.body);

    res.status(201).json(favorite);
  } catch (err) {
    console.error(`Error while creating favorite`, err);
    next(err);
  }
};

export const update = async (
  req: Request<{ userId: string; imageId: string }, {}, ImageItem, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const favorite = await updateFavorite(req.params.userId, req.body);
    if (!favorite) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(favorite);
  } catch (err) {
    console.error(`Error while updating favorite`, err);
    next(err);
  }
};

export const remove = async (
  req: Request<{ userId: string; imageId: string }, {}, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await removeFavorite(
      req.params.userId,
      req.params.imageId
    );
    if (!response) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).json({});
  } catch (err) {
    console.error(`Error while deleting favorite`, err);
    next(err);
  }
};
