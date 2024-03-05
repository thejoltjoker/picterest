import axios from "axios";
import { useState } from "react";
import ImageGrid from "../components/ImageGrid";
import SearchBar from "../components/SearchBar";
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
      <div className={images ? undefined : "mx-auto mt-[40vh] max-w-screen-md"}>
        {!images && <p className="mb-2 ps-4 text-xl">Search for something</p>}
        <SearchBar
          handleSearch={handleSearch}
          isLoading={isLoading}
          isError={isError}
          correctedQuery={correctedQuery}
        />
        {searchInfo && (
          <div className="ps-2 text-stone-500 lg:ps-4">{searchInfo}</div>
        )}
      </div>
      {images && <ImageGrid images={images} />}
    </>
  );
};

export default SearchPage;
