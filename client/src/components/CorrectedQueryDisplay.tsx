import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

type Props = {
  correctedQuery: string;
  onChange: (value: string) => void;
  handleSearch: (query: string) => void;
};

const CorrectedQueryDisplay = ({
  correctedQuery,
  onChange,
  handleSearch,
}: Props) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      {!isHidden && (
        <div className="absolute top-14 flex h-10 w-fit items-center rounded-full border border-theme-200 bg-theme-200/30 px-4 md:right-1 md:top-1">
          <p className="italic text-theme-800/80 dark:text-stone-100">
            Did you mean{" "}
            <span
              onClick={() => {
                onChange(correctedQuery);
                handleSearch(correctedQuery);
              }}
              className="cursor-pointer font-bold text-theme-300 transition hover:text-theme-400 dark:text-theme-100 hover:dark:text-theme-50"
            >
              {correctedQuery}
            </span>
            ?
          </p>
          <FaXmark
            className="-mr-1 ml-2 cursor-pointer"
            onClick={() => setIsHidden(true)}
          />
        </div>
      )}
    </>
  );
};

export default CorrectedQueryDisplay;
