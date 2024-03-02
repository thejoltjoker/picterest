import express from "express";
import { create, get, remove, update } from "../controllers/user.controller";
import { UserSchema } from "../schemas/user.schema";
import { validate } from "../validate";
import favoritesRouter from "./favorites.route";

const router = express.Router();

router.get("/:userId", get);

router.post("/", validate(UserSchema), create);

router.put("/:userId", validate(UserSchema), update);

router.delete("/:userId", remove);

router.use("/:userId/favorites", favoritesRouter);

export default router;
