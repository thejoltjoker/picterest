import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ImageItem } from "../models/ImageItem";
import ImageDisplay from "./ImageDisplay";
import SaveImage from "./SaveImage";

interface ImageGridItemProps {
  image: ImageItem;
  index: number;
}

const ImageGridItem = ({ image, index }: ImageGridItemProps) => {
  return (
    <div
      className="slide-up group relative mt-4 overflow-hidden rounded-2xl border border-stone-300 bg-stone-300 transition duration-300 first:mt-0 hover:scale-[102%] dark:border-stone-700 dark:bg-zinc-800 sm:mt-8"
      style={
        {
          "--i": index,
          aspectRatio: `${image.width} / ${image.height}`,
        } as React.CSSProperties
      }
    >
      <div className="absolute left-3 top-3 z-20">
        <SaveImage image={image} />
      </div>
      <Link
        to={image.contextLink}
        className="absolute bottom-3 left-3 h-8 w-[calc(100%-1.5rem)] justify-between overflow-hidden rounded-full text-stone-800 transition dark:text-stone-100"
      >
        <div className="absolute left-0 top-0 h-8 w-full translate-x-full rounded-full bg-stone-100 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100 dark:bg-zinc-800">
          <p className="image-title w-full overflow-clip whitespace-nowrap ps-2 pt-1 opacity-0 transition duration-200 group-hover:opacity-100">
            {image.title}
          </p>
        </div>
        <div className="absolute right-0 top-0 flex size-8 items-center justify-center rounded-full bg-stone-100 transition dark:bg-zinc-800">
          <FaLink />
        </div>
      </Link>

      <ImageDisplay image={image} />
    </div>
  );
};

export default ImageGridItem;
