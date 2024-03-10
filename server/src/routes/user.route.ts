import express from "express";
import {
  create as createFavorite,
  get as getFavorite,
  remove as removeFavorite,
  update as updateFavorite,
} from "../controllers/favorites.controller";
import { create, get, remove, update } from "../controllers/user.controller";

import { imageItemSchema } from "../schemas/imageItem.schema";
import { userSchema } from "../schemas/user.schema";
import { validate } from "../validate";

const router = express.Router();

router.get("/:userId", get);
router.post("/", validate(userSchema), create);
router.put("/:userId", validate(userSchema), update);
router.delete("/:userId", remove);

router.get("/:userId/favorites", getFavorite);
router.post("/:userId/favorites", validate(imageItemSchema), createFavorite);
router.put(
  "/:userId/favorites/:imageId",
  validate(imageItemSchema),
  updateFavorite
);
router.delete("/:userId/favorites/:imageId", removeFavorite);

export default router;
