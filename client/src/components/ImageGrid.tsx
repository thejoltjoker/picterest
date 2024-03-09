import { Item } from "../models/SearchResult";
import ImageGridItem from "./ImageGridItem";

type Props = { images: Item[] };

const ImageGrid = ({ images: results }: Props) => {
  return (
    <>
      <div className="relative w-full columns-1 gap-4 sm:columns-2 sm:gap-8 lg:columns-3 2xl:columns-4">
        {results.map((item, i) => (
          <ImageGridItem key={item.link} image={item} index={i} />
        ))}
      </div>
    </>
  );
};

export default ImageGrid;
