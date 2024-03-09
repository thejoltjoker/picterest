import axios from "axios";

// import { SocksProxyAgent } from "socks-proxy-agent";
import { SearchResult } from "../models/SearchResult";

// const proxyAgent = new SocksProxyAgent(import.meta.env.PROXY_URL ?? "");

export const search = async (
  query: string,
  start: number = 0,
  num: number = 10,
): Promise<SearchResult> => {
  try {
    if (!import.meta.env.VITE_GOOGLE_API_KEY) {
      throw new Error(
        "Missing Google API key. Add it to your environment as GOOGLE_API_KEY.",
      );
    }

    if (!import.meta.env.VITE_SEARCH_ENGINE_ID) {
      throw new Error(
        "Missing Google Custom Search Engine ID. Add it to your environment as SEARCH_ENGINE_ID.",
      );
    }

    const url = new URL("https://www.googleapis.com/customsearch/v1");
    url.searchParams.append("key", import.meta.env.VITE_GOOGLE_API_KEY ?? "");
    url.searchParams.append("cx", import.meta.env.VITE_SEARCH_ENGINE_ID ?? "");
    url.searchParams.append("searchType", "image");
    url.searchParams.append("start", start.toString());
    url.searchParams.append("num", num.toString());
    url.searchParams.append("q", query);

    // TODO Remove proxy before publishing
    const response = await axios.get<SearchResult>(
      url.toString(),
      // , {
      //   httpAgent: proxyAgent,
      //   httpsAgent: proxyAgent,
      // }
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error while performing search", error);
    throw error;
  }
};
