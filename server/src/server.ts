import cors from "cors";
import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import router from "./routes";
import { initDb } from "./services/database";
import { swaggerSpec } from "./swagger";

initDb();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api", router);

app.use((req, res) => {
  res.status(500).send({ message: "Something went wrong" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
