import express from "express";
import {
  create,
  get,
  remove,
  update,
} from "../controllers/favorites.controller";

const router = express.Router();

router.get("/", get);

router.post("/", create);

router.put("/:favoriteId", update);

router.delete("/:favoriteId", remove);

export default router;
