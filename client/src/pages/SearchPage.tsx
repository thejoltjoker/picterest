import { useState } from "react";
import { Md5 } from "ts-md5";
import Button from "../components/Button";
import ImageGrid from "../components/ImageGrid";
import Logotype from "../components/Logotype";
import SearchBar from "../components/SearchBar";
import { ImageItem } from "../models/ImageItem";
import { search } from "../services/search.service";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [correctedQuery, setCorrectedQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchInfo, setSearchInfo] = useState<string>();
  const [images, setImages] = useState<ImageItem[]>([]);
  const numberFormatter = Intl.NumberFormat("en", { notation: "compact" });

  const handleSearch = async (
    searchQuery: string,
    searchStart: number = 0,
    appendResults: boolean = false,
  ) => {
    setIsError(false);
    setCorrectedQuery("");
    try {
      setIsLoading(true);
      const response = await search(searchQuery, searchStart, 10);
      const imageItems = response.items.map((img): ImageItem => {
        return new ImageItem(
          Md5.hashStr(img.link),
          img.title,
          img.snippet,
          img.link,
          img.image.contextLink,
          img.image.thumbnailLink,
          img.image.width,
          img.image.height,
        );
      });

      if (response)
        setImages(appendResults ? [...images, ...imageItems] : [...imageItems]);
      setIsLoading(false);
      setSearchInfo(
        `Found ${numberFormatter.format(Number(response.searchInformation.totalResults))} results in ${response.searchInformation.formattedSearchTime}s.`,
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
    handleSearch(query, images.length + 1, true);
  };

  return (
    <>
      <div
        className={
          searchInfo
            ? undefined
            : "mx-auto mt-[10vh] max-w-screen-md sm:mt-[42vh]"
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
      {searchInfo && <ImageGrid images={images} />}
      {searchInfo && (
        <div className="flex w-full justify-center pt-4 sm:pt-8">
          <Button onClick={handleLoadMore} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load more"}
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchPage;
