import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Button from "../components/Button";
import SearchErrorIcon from "../components/SearchErrorIcon";
import SearchLoadingIcon from "../components/SearchLoadingIcon";
interface SearchBarProps {
  handleSearch: (query: string) => void;
  isLoading: boolean;
  isError: boolean;
  correctedQuery: string;
}
const SearchBar = ({
  handleSearch,
  isLoading,
  isError,
  correctedQuery,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="">
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
                className="z-0 h-12 w-full grow rounded-full border-2 border-slate-300 ps-12 focus:border-slate-500 focus:outline-none focus:ring-0 focus:ring-offset-0"
              />
              <FaMagnifyingGlass className="absolute left-4 top-4 text-lg" />
              {isLoading && !isError && (
                <div className="text-theme-100 absolute right-3 top-3">
                  <SearchLoadingIcon />
                </div>
              )}
              {!isLoading && isError && (
                <div className="text-theme-500 absolute right-3 top-3">
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
    </>
  );
};

export default SearchBar;
