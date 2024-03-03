import { ImageItem } from "../models/ImageItem";
// TODO Show placeholder on broken img
interface ImageGridItemProps {
  data: ImageItem;
}

const ImageGridItem = ({ data }: ImageGridItemProps) => {
  return (
    <div
      className="group relative mt-4 rounded-2xl bg-slate-200 transition duration-300 first:mt-0 hover:scale-[103%] md:mt-8"
      style={{
        aspectRatio: `${data.thumbnailWidth} / ${data.thumbnailHeight}`,
      }}
    >
      <div className="image-title absolute bottom-3 left-3 z-20 w-full overflow-clip whitespace-nowrap text-white opacity-0 transition duration-200 group-hover:opacity-100">
        {data.title}
      </div>
      <div className="absolute left-3 top-3 z-20 rounded-full p-1 text-white transition group-hover:bg-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="stroke h-6 w-6 translate-y-[1px] fill-none stroke-white stroke-2 group-hover:fill-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
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
        src={data.thumbnailLink}
        alt={data.title}
        className="z-10 w-full overflow-hidden rounded-2xl transition duration-300 group-hover:shadow-xl"
        style={{
          aspectRatio: `${data.thumbnailWidth} / ${data.thumbnailHeight}`,
        }}
        onMouseOver={(e) => (e.currentTarget.src = data.link)}
      />
    </div>
  );
};

export default ImageGridItem;