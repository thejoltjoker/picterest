import { useFavoritesContext } from "../contexts/FavoritesContext";
import { ImageItem } from "../models/ImageItem";
import { FavoritesActionType } from "../reducers/FavoritesReducer";
import { createFavorite } from "../services/user.service";

type Props = { image: ImageItem };

const SaveImage = ({ image }: Props) => {
  const { favorites, dispatch } = useFavoritesContext();

  // TODO Dynamically get userId
  const userId = "1";
  const handleSave = async () => {
    try {
      await createFavorite(userId, image);
      dispatch({
        type: FavoritesActionType.Add,
        payload: [image],
      });
    } catch (error) {
      console.error("Error when saving image to favorites");
    }
  };

  return (
    <button
      className={
        favorites.find((img) => img.imageId === image.imageId)
          ? "rounded-full bg-blue-500 p-1 text-white transition"
          : "rounded-full p-1 text-white transition group-hover:bg-blue-500"
      }
      onClick={handleSave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`stroke h-6 w-6 translate-y-[1px] fill-none stroke-white stroke-2 group-hover:fill-white ${favorites.find((img) => img.imageId === image.imageId) && "fill-white"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  );
};

export default SaveImage;
