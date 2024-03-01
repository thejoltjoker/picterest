import cors from "cors";
import "dotenv/config";
import express from "express";
import { ImageItem } from "./models/ImageItem";
import { search } from "./services/googleCustomSearch";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.get("/api/search/:query", async (req, res) => {
  try {
    const start = typeof req.query.start === "string" ? req.query.start : "0";
    const searchResult = await search(req.params.query, start);

    const images = searchResult.items
      .filter((item) => item.pagemap.cse_thumbnail)
      .map(
        (item) =>
          new ImageItem(
            item.title,
            item.snippet,
            item.link,
            item.pagemap.cse_thumbnail ? item.pagemap.cse_thumbnail[0].src : "",
            item.pagemap.cse_thumbnail
              ? item.pagemap.cse_thumbnail[0].width
              : "",
            item.pagemap.cse_thumbnail
              ? item.pagemap.cse_thumbnail[0].height
              : "",
            item.pagemap.cse_image ? item.pagemap.cse_image[0].src : ""
          )
      );

    res.status(200).json({ results: images });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong when performing your search" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
