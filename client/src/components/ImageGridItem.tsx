import { ImageItem } from "../models/ImageItem";
import SaveImage from "./SaveImage";
// TODO Show placeholder on broken img
interface ImageGridItemProps {
  image: ImageItem;
  index: number;
}

const ImageGridItem = ({ image, index }: ImageGridItemProps) => {
  return (
    <div
      className="slide-up group relative mt-4 rounded-2xl bg-slate-200 transition duration-300 first:mt-0 hover:scale-[103%] md:mt-8"
      style={
        {
          "--i": index,
          aspectRatio: `${image.thumbnailWidth} / ${image.thumbnailHeight}`,
        } as React.CSSProperties
      }
    >
      <div className="image-title absolute bottom-3 left-3 z-20 w-full overflow-clip whitespace-nowrap text-white opacity-0 transition duration-200 group-hover:opacity-100">
        {image.title}
      </div>
      <div className="absolute left-3 top-3 z-20">
        <SaveImage image={image} />
      </div>
      <div className="absolute bottom-3 right-3 z-20 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </div>
      <img
        src={image.thumbnailLink}
        alt={image.title}
        className="z-10 w-full overflow-hidden rounded-2xl transition duration-300 group-hover:shadow-xl"
        style={{
          aspectRatio: `${image.thumbnailWidth} / ${image.thumbnailHeight}`,
        }}
        onMouseOver={(e) => (e.currentTarget.src = image.link)}
      />
    </div>
  );
};

export default ImageGridItem;
