import { useState } from "react";
import SearchResults from "../components/SearchResults";
import { SearchResult } from "../models/SearchResult";

const SearchPage = () => {
  const [images, setImages] = useState<SearchResult[]>([
    { id: "1", url: "https://placehold.co/869x792" },
    { id: "2", url: "https://placehold.co/752x475" },
    { id: "3", url: "https://placehold.co/401x301" },
    { id: "4", url: "https://placehold.co/1043x706" },
    { id: "5", url: "https://placehold.co/442x655" },
    { id: "6", url: "https://placehold.co/523x287" },
    { id: "7", url: "https://placehold.co/676x912" },
    { id: "8", url: "https://placehold.co/835x599" },
    { id: "9", url: "https://placehold.co/621x412" },
    { id: "10", url: "https://placehold.co/388x544" },
  ]);
  return (
    <>
      <div className="mx-auto max-w-screen-md px-4 pt-8">
        {/* <h1 className="font-heading pb-4 text-6xl font-bold text-slate-800">
          Image Search
        </h1> */}
        <div className="relative inline-flex w-full gap-4">
          <input
            type="text"
            name=""
            id=""
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
          <button className="rounded-full border border-blue-600 bg-blue-500 px-6 tracking-wide text-white transition hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      <SearchResults results={images} />
    </>
  );
};

export default SearchPage;
