import { NextFunction, Request, Response } from "express";
import { ImageItem } from "../models/ImageItem";
import { search } from "../services/googleCustomSearch";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const start = typeof req.query.start === "string" ? req.query.start : "0";
    const searchResult = await search(req.params.query, start);

    const images = searchResult.items.map((item) => {
      const { title, link, snippet } = item;
      const { contextLink, thumbnailLink, thumbnailWidth, thumbnailHeight } =
        item.image;
      return new ImageItem(
        title,
        snippet,
        contextLink,
        link,
        thumbnailLink,
        thumbnailWidth,
        thumbnailHeight
      );
    });

    res.status(200).json({
      searchInformation: searchResult.searchInformation,
      correctedQuery: searchResult.spelling?.correctedQuery ?? "",
      items: images,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong when performing your search" });
  }
};
