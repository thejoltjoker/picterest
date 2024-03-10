import { useAuth0 } from "@auth0/auth0-react";
import { FaHeart } from "react-icons/fa6";
import { Md5 } from "ts-md5";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import { ImageItem } from "../models/ImageItem";
import { FavoritesActionType } from "../reducers/FavoritesReducer";
import { createFavorite, removeFavorite } from "../services/favorites.service";
type Props = { image: ImageItem };
// TODO rename
const SaveImage = ({ image }: Props) => {
  const { user } = useAuth0();
  const { favorites, dispatch } = useFavoritesContext();

  const userId = user?.email ? Md5.hashStr(user.email) : "0";

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

  const handleRemove = async () => {
    try {
      await removeFavorite(userId, image.imageId);
      dispatch({
        type: FavoritesActionType.Remove,
        payload: [image],
      });
    } catch (error) {
      console.error("Error when remove image from favorites");
    }
  };

  const handleClick = async () => {
    favorites.find((img) => img.imageId === image.imageId)
      ? handleRemove()
      : handleSave();
  };

  return (
    <button
      className={
        favorites.find((img) => img.imageId === image.imageId)
          ? "rounded-full border border-theme-600 bg-theme-400 p-2 text-white transition"
          : "rounded-full border border-transparent p-2 text-white transition group-hover:border-theme-200 group-hover:bg-theme-100"
      }
      onClick={handleClick}
    >
      <FaHeart />
    </button>
  );
};

export default SaveImage;
