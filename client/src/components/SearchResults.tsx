import { SearchResult } from "../models/SearchResult";

type Props = { results: SearchResult[] };

const SearchResults = ({ results }: Props) => {
  return (
    <div className="relative w-full columns-1 gap-4 px-4 pb-8 sm:columns-2 md:columns-3 md:gap-8 md:px-8 xl:columns-4">
      {results.map((item) => (
        <div key={item.id} className="relative pt-4 md:pt-8">
          <img src={item.url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
