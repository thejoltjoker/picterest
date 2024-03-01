import axios from "axios";
import "dotenv/config";
import { SearchResult } from "../models/SearchResult";

export const search = async (
  query: string,
  start: string = "0",
  num: string = "10"
): Promise<SearchResult> => {
  try {
    if (!process.env.GOOGLE_API_KEY) {
      throw new Error(
        "Missing Google API key. Add it to your environment as GOOGLE_API_KEY."
      );
    }

    if (!process.env.SEARCH_ENGINE_ID) {
      throw new Error(
        "Missing Google Custom Search Engine ID. Add it to your environment as SEARCH_ENGINE_ID."
      );
    }

    const url = new URL("https://www.googleapis.com/customsearch/v1");
    url.searchParams.append("key", process.env.GOOGLE_API_KEY ?? "");
    url.searchParams.append("cx", process.env.SEARCH_ENGINE_ID ?? "");
    url.searchParams.append("q", query);
    url.searchParams.append("start", start);
    url.searchParams.append("num", num);

    const response = await axios.get<SearchResult>(url.toString());
    return response.data;
  } catch (error) {
    console.error("Error while performing search", error);
    throw error;
  }
};
