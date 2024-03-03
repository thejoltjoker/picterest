import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import ImageGrid from "../components/ImageGrid";
import SearchErrorIcon from "../components/SearchErrorIcon";
import SearchLoadingIcon from "../components/SearchLoadingIcon";
import { ImageItem } from "../models/ImageItem";
import { SearchResult } from "../models/SearchResult";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchInfo, setSearchInfo] = useState("");
  const [correctedQuery, setCorrectedQuery] = useState("");
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<ImageItem[]>();
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  const handleSearch = async (searchQuery: string) => {
    setIsError(false);
    setCorrectedQuery("");
    try {
      setIsLoading(true);
      const url = new URL(
        `http://localhost:3000/api/search/${encodeURIComponent(searchQuery)}`,
      );

      const response = await axios.get<SearchResult>(url.toString());
      if (response.data) setImages(response.data.items);
      setIsLoading(false);
      setSearchInfo(
        `Found ${formatter.format(Number(response.data.searchInformation.totalResults))} results in ${response.data.searchInformation.formattedSearchTime}s.`,
      );
      if (response.data.correctedQuery)
        setCorrectedQuery(response.data.correctedQuery);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setSearchInfo("Error when searching for images");
      console.error("Error when searching for images");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-md px-4 pt-24">
        <h1 className="pb-4 font-heading text-6xl font-bold text-slate-800">
          Image Search Inc.
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(query);
          }}
        >
          <div className="flex gap-4">
            <div className="relative w-full">
              <input
                type="text"
                name=""
                id=""
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="z-0 h-12 w-full grow rounded-full border-2 border-slate-300 ps-12"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute left-3 top-3 h-6 w-6 stroke-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              {isLoading && !isError && (
                <div className="absolute right-3 top-3 text-blue-500">
                  <SearchLoadingIcon />
                </div>
              )}
              {!isLoading && isError && (
                <div className="absolute right-3 top-3 text-red-500">
                  <SearchErrorIcon />
                </div>
              )}
            </div>
            <Button disabled={query ? false : true}>Search</Button>
          </div>
        </form>
        {correctedQuery && (
          <div className="ps-3 pt-4 text-slate-500">
            Did you mean{" "}
            <span
              className="text-slate-700 underline decoration-blue-500"
              onClick={() => {
                setQuery(correctedQuery);
                handleSearch(correctedQuery);
              }}
            >
              {correctedQuery}
            </span>
            ?
          </div>
        )}
      </div>
      {searchInfo && (
        <div className="ps-4 text-slate-500 lg:ps-8">{searchInfo}</div>
      )}
      {images && <ImageGrid images={images} />}
    </>
  );
};

export default SearchPage;
