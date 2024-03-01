import { ImageItem } from "../models/ImageItem";
import Button from "./Button";
import SearchResultItem from "./SearchResultItem";

type Props = { results: ImageItem[] };

const SearchResults = ({ results }: Props) => {
  return (
    <>
      <div className="relative w-full columns-1 gap-4 px-4 py-8 sm:columns-2 md:columns-3 md:gap-8 md:px-8 xl:columns-4">
        {results.map((item) => (
          <SearchResultItem key={item.imageUrl} data={item} />
        ))}
      </div>
      <div className="pb-8 text-center">
        <Button>Load more</Button>
      </div>
    </>
  );
};

export default SearchResults;
