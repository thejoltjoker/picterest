export interface SearchResult {
  kind: string;
  url: URL;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  promotions?: object[];
  spelling?: Spelling;
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
  mime: FileFormat;
  fileFormat: FileFormat;
  image: Image;
}

export enum FileFormat {
  ImageJPEG = "image/jpeg",
}

export interface Image {
  contextLink: string;
  height: number;
  width: number;
  byteSize: number;
  thumbnailLink: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
}

export enum Kind {
  CustomsearchResult = "customsearch#result",
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
  searchType: string;
}

export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface Spelling {
  correctedQuery: string;
  htmlCorrectedQuery: string;
}

export interface URL {
  type: string;
  template: string;
}
