import { ImageItem } from "./ImageItem";

export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface SearchResult {
  searchInformation: SearchInformation;
  correctedQuery: string;
  items: ImageItem[];
}
