import { NextFunction, Request, Response } from "express";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({});
  } catch (err) {
    console.error(`Error while getting programming languages`, err);
    next(err);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({});
  } catch (err) {
    console.error(`Error while creating programming language`, err);
    next(err);
  }
};

// app.post(
//   "/api/users/:userId/favorites",

//   async (req: Request, res: Response) => {
//     try {
//       res.status(200).json({});
//       res.status(200).json({ saved: result });
//     } catch (error) {
//       const message = "Failed to save image to user";
//       console.error(message, error);
//       res.status(500).json({ message: message });
//     }
//   }
// );

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({});
  } catch (err) {
    console.error(`Error while updating programming language`, err);
    next(err);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({});
  } catch (err) {
    console.error(`Error while deleting programming language`, err);
    next(err);
  }
};
