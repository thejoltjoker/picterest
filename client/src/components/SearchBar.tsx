<<<<<<< Updated upstream
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
=======
// TODO Make X on search suggestion work
import { FaMagnifyingGlass } from "react-icons/fa6";
>>>>>>> Stashed changes
import Button from "../components/Button";
import SearchErrorIcon from "../components/SearchErrorIcon";
import SearchLoadingIcon from "../components/SearchLoadingIcon";
import CorrectedQueryDisplay from "./CorrectedQueryDisplay";
import InputTextField from "./InputTextField";
interface SearchBarProps {
  query: string;
  handleSearch: (query: string) => void;
  isLoading: boolean;
  isError: boolean;
  correctedQuery: string;
  onChange: (value: string) => void;
}

const SearchBar = ({
  query,
  handleSearch,
  isLoading,
  isError,
  correctedQuery,
  onChange,
}: SearchBarProps) => {
  return (
    <>
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(query);
          }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <div className="relative grow">
              {/* <input
                type="text"
                name="search-query"
                id="search-query"
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`z-0 h-12 w-full grow rounded-full border-2 border-slate-300 ps-12 focus:border-slate-500 focus:outline-none focus:ring-0 focus:ring-offset-0 ${correctedQuery && "mb-12"} placeholder:text-stone-400 md:mb-0`}
              /> */}
              <InputTextField
                name="search-query"
                id="search-query"
                placeholder="What are you looking for?"
                value={query}
                onChange={onChange}
                className={`ps-12 ${correctedQuery && "mb-12"}`}
              />

              {correctedQuery && (
                <CorrectedQueryDisplay
                  correctedQuery={correctedQuery}
                  onChange={onChange}
                  handleSearch={handleSearch}
                />
              )}
              <FaMagnifyingGlass className="absolute left-4 top-4 text-lg dark:text-white" />
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
      </div>
    </>
  );
};

export default SearchBar;
