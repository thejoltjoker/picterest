import axios from "axios";
import { useState } from "react";
import Button from "../components/Button";
import ImageGrid from "../components/ImageGrid";
import Logotype from "../components/Logotype";
import SearchBar from "../components/SearchBar";
import { ImageItem } from "../models/ImageItem";
import { SearchResult } from "../models/SearchResult";
// TODO add load more button
const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchInfo, setSearchInfo] = useState("");
  const [correctedQuery, setCorrectedQuery] = useState("");
  const [images, setImages] = useState<ImageItem[]>();
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  const handleSearch = async (searchQuery: string) => {
    setIsError(false);
    setCorrectedQuery("");
    try {
      // TODO Create service for searching
      setIsLoading(true);
      const url = new URL(
        `http://localhost:3000/api/search/${encodeURIComponent(searchQuery)}`,
      );

      const response = await axios.get<SearchResult>(url.toString());
      console.log(response);
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
      <div
        className={
          images ? undefined : "mx-auto mt-[10vh] max-w-screen-md sm:mt-[42vh]"
        }
      >
        <div className="mx-auto w-fit pb-16 sm:hidden">
          <Logotype size="4xl" />
        </div>
        <SearchBar
          handleSearch={handleSearch}
          isLoading={isLoading}
          isError={isError}
          correctedQuery={correctedQuery}
        />

        {searchInfo && (
          <div className="py-2 ps-4 text-stone-500 lg:ps-4">{searchInfo}</div>
        )}
      </div>
      {images && <ImageGrid images={images} />}
      {images && <Button>Load more</Button>}
    </>
  );
};

export default SearchPage;
