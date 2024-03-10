import { FaMagnifyingGlass } from "react-icons/fa6";
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
                <div className="absolute right-3 top-3 text-theme-100">
                  <SearchLoadingIcon />
                </div>
              )}
              {!isLoading && isError && (
                <div className="absolute right-3 top-3 text-theme-500">
                  <SearchErrorIcon />
                </div>
              )}
            </div>

            <Button disabled={query && !isLoading ? false : true}>
              Search
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
