import axios from "axios";
import "dotenv/config";
import { SocksProxyAgent } from "socks-proxy-agent";
import { SearchResult } from "../models/SearchResult";

const proxyAgent = new SocksProxyAgent(process.env.PROXY_URL ?? "");

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
    url.searchParams.append("searchType", "image");
    url.searchParams.append("start", start);
    url.searchParams.append("num", num);
    url.searchParams.append("q", query);

    // TODO Remove proxy before publishing
    // if (process.env.NODE_ENV == "production") {
    const response = await axios.get<SearchResult>(
      url.toString()
      // , {
      //   httpAgent: proxyAgent,
      //   httpsAgent: proxyAgent,
      // }
    );
    return response.data;
    // } else {
    //   const data = await fs.readFile(
    //     path.resolve(__dirname, "./mockResult.json"),
    //     "utf-8"
    //   );
    //   return JSON.parse(data);
    // }
  } catch (error) {
    console.error("Error while performing search", error);
    throw error;
  }
};
