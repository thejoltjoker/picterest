export interface SearchResult {
  kind: string;
  url: URL;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}

export interface Context {
  title: string;
}

export interface Item {
  kind: Kind;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}

export enum Kind {
  CustomsearchResult = "customsearch#result",
}

export interface Pagemap {
  cse_thumbnail?: CSEThumbnail[];
  metatags: { [key: string]: string }[];
  cse_image?: CSEImage[];
  offer?: Offer[];
  document?: Document[];
}

export interface CSEImage {
  src: string;
}

export interface CSEThumbnail {
  src: string;
  width: string;
  height: string;
}

export interface Document {
  keywords: string;
  keyword: string;
}

export interface Offer {
  price: string;
  url: string;
}

export interface Queries {
  request: NextPage[];
  nextPage: NextPage[];
}

export interface NextPage {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface URL {
  type: string;
  template: string;
}
