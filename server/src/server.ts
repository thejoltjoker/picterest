import cors from "cors";
import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import router from "./routes/index.route";
import { initDb } from "./services/database";
import swaggerOutput from "./swagger_output.json";

initDb();

const app = express();
const port = process.env.PORT ?? 3000;
app.use(cors());
app.use(express.json());

// TODO add swagger docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));
app.use("/api", router);

app.use((req, res) => {
  res.status(500).send({ message: "Something went wrong" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
