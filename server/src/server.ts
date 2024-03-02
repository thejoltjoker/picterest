import cors from "cors";
import "dotenv/config";
import express from "express";
import searchRouter from "./routes/search.route";
import userRouter from "./routes/user.route";

const app = express();
const port = process.env.PORT ?? 3000;
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/search", searchRouter);

app.use((req, res) => {
  res.status(500).send({ message: "Something went wrong" });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
