import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
      className="slide-up group relative mt-4 rounded-2xl bg-slate-200 transition duration-300 first:mt-0 hover:scale-[103%]"
      style={
        {
          "--i": index,
          aspectRatio: `${image.thumbnailWidth} / ${image.thumbnailHeight}`,
        } as React.CSSProperties
      }
    >
      <div className="absolute left-3 top-3 z-20">
        <SaveImage image={image} />
      </div>
      <Link to={image.contextLink}>
        <div className="image-title absolute bottom-3 left-3 z-20 w-full overflow-clip whitespace-nowrap text-white opacity-0 transition duration-200 group-hover:opacity-100">
          {image.title}
        </div>
        <div className="absolute bottom-3 right-3 z-20 text-2xl text-white">
          <FaLink />
        </div>
      </Link>
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
