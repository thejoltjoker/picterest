import express from "express";
import {
  create as createFavorite,
  get as getFavorite,
  remove as removeFavorite,
  update as updateFavorite,
} from "../controllers/favorites.controller";
import { create, get, remove, update } from "../controllers/user.controller";
import { ImageItemSchema } from "../schemas/imageItem.schema";
import { UserSchema } from "../schemas/user.schema";
import { validate } from "../validate";

const router = express.Router();

router.get("/:userId", get);
router.post("/", validate(UserSchema), create);
router.put("/:userId", validate(UserSchema), update);
router.delete("/:userId", remove);

router.get("/:userId/favorites", getFavorite);
router.post("/:userId/favorites", validate(ImageItemSchema), createFavorite);
router.put(
  "/:userId/favorites/:imageId",
  validate(ImageItemSchema),
  updateFavorite
);
router.delete("/:userId/favorites/:imageId", removeFavorite);

export default router;
