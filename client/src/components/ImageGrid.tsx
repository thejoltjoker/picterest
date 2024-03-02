import { ImageItem } from "../models/ImageItem";
import Button from "./Button";
import ImageGridItem from "./ImageGridItem";

type Props = { images: ImageItem[] };

const ImageGrid = ({ images: results }: Props) => {
  return (
    <>
      <div className="relative w-full columns-1 gap-4 px-4 py-8 sm:columns-2 md:gap-8 md:px-8 lg:columns-3 2xl:columns-4">
        {results.map((item) => (
          <ImageGridItem key={item.link} data={item} />
        ))}
      </div>
      <div className="pb-8 text-center">
        <Button>Load more</Button>
      </div>
    </>
  );
};

export default ImageGrid;
