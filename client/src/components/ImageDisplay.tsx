import { useState } from "react";
import { FaRegFaceFrown } from "react-icons/fa6";
import { ImageItem } from "../models/ImageItem";

type Props = { image: ImageItem };

const ImageDisplay = ({ image }: Props) => {
  const [isError, setIsError] = useState(false);
  return (
    <>
      {isError ? (
        <div
          className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl text-stone-500 transition duration-300 group-hover:shadow-xl"
          style={{
            aspectRatio: `${image.width} / ${image.height}`,
          }}
        >
          <FaRegFaceFrown className="text-2xl opacity-50" />
          <p>Failed to load image</p>
        </div>
      ) : (
        <img
          src={image.thumbnailLink}
          alt={image.title}
          className="z-10 w-full overflow-hidden rounded-2xl transition duration-300 group-hover:shadow-xl"
          style={{
            aspectRatio: `${image.width} / ${image.height}`,
          }}
          onMouseOver={(e) => (e.currentTarget.src = image.link)}
          onError={(e) => {
            e.currentTarget.onerror = null;
            setIsError(true);
            // currentTarget.src = "/image.svg";
          }}
        />
      )}
    </>
  );
};

export default ImageDisplay;
