import { useState } from "react";
import Button from "../components/Button";
import ImageGrid from "../components/ImageGrid";
import Logotype from "../components/Logotype";
import SearchBar from "../components/SearchBar";
import { Item } from "../models/SearchResult";
import { search } from "../services/search.service";
// TODO add load more button
const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchInfo, setSearchInfo] = useState("");
  const [correctedQuery, setCorrectedQuery] = useState("");
  const [images, setImages] = useState<Item[]>([]);
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  const [query, setQuery] = useState("");

  const handleSearch = async (
    searchQuery: string,
    searchStart?: number = 0,
  ) => {
    setIsError(false);
    setCorrectedQuery("");
    try {
      // TODO Create service for searching
      // TODO Move api search to separate branch and use google api in client
      setIsLoading(true);
      const response = await search(searchQuery, searchStart, 10);
      console.log(response);
      if (response) setImages([...images, ...response.items]);
      setIsLoading(false);
      setSearchInfo(
        `Found ${formatter.format(Number(response.searchInformation.totalResults))} results in ${response.searchInformation.formattedSearchTime}s.`,
      );
      if (response.spelling)
        setCorrectedQuery(response.spelling.correctedQuery);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setSearchInfo("Error when searching for images");
      console.error("Error when searching for images");
    }
  };

  const handleLoadMore = () => {
    handleSearch(query, images.length);
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
          query={query}
          handleSearch={handleSearch}
          isLoading={isLoading}
          isError={isError}
          correctedQuery={correctedQuery}
          onChange={(value) => setQuery(value)}
        />

        {searchInfo && (
          <div className="py-2 ps-4 text-stone-500 lg:ps-4">{searchInfo}</div>
        )}
      </div>
      {images && <ImageGrid images={images} />}
      {images && <Button onClick={handleLoadMore}>Load more</Button>}
    </>
  );
};

export default SearchPage;
