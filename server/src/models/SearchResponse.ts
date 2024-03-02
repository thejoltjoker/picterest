import { ImageItem } from "./ImageItem";
import { SearchInformation } from "./SearchResult";

export interface SearchResponse {
  searchInformation: SearchInformation;
  correctedQuery: string;
  items: ImageItem[];
}
