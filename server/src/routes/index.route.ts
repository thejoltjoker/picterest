import express from "express";

import searchRouter from "./search.route";
import userRouter from "./user.route";

const router = express.Router();

router.use("/user", userRouter);
router.use("/search", searchRouter);

export default router;
